import React , { useState , useContext , useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../ProductContext/ProductContext';
import './panel.css';
import { v4 as uuidv4 } from 'uuid';
import { Modal } from 'react-bootstrap';
// import ProductContext from '../ProductContext/ProductContext';
import Mynav from '../Mynav/Mynav';
const colorsList = ['green', 'red', 'blue'];
const sizesList = ['small', 'medium', 'large', 'XL', '2XL', '3XL'];
const Panel = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([null, null, null]);
  const [productDetails, setProductDetails] = useState([]);
  const formik = useFormik({
    initialValues: {
      productName: '',
      price: '',
      selectedColors: [],
      selectedSizes: [],
      stock: '',
      category: '',
    },
    onSubmit: (values) => {
      const stock = values.selectedSizes.reduce((acc, size) => {
        values.selectedColors.forEach(color => {
          acc[`${color}_${size}`] = values.stock;
        });
        return acc;
      }, {});
      const timestamp = new Date().toISOString(); // تاریخ و زمان کنونی
      const category = values.category; // اگر category مقدار نداشت، یک مقدار پیش‌فرض به آن بدهید
      let productIdPrefix = '';
      if (category === '') {
        productIdPrefix = 'TS';
      } else if (category === 'about') {
        productIdPrefix = 'HT';
      } else if (category === 'Shop') {
        productIdPrefix = 'SK';
      } else if (category === 'tshirt') {
        productIdPrefix = 'AT';
      }
      const newProduct = {
        id: `${productIdPrefix}-${uuidv4()}`, // شناسه‌ی یکتا
        productName: values.productName,
        price: values.price,
        category: values.category,
        stock: stock,
        images: selectedImages,
        selectedSizes: values.selectedSizes,
        selectedColors: values.selectedColors,
        timestamp: timestamp, // تاریخ و زمان اضافه کردن محصول
      };
      addProduct(newProduct);
      navigate(`/${category}`);
      // اضافه کردن یک کپی از محصول به Shop
      addProduct({ ...newProduct, category: 'shop' });
    },
  });
  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...selectedImages];
      updatedImages[index] = file;
      setSelectedImages(updatedImages);
    }
  };
  const handleSizesChange = (event) => {
    const selectedSize = event.target.value;
    const isChecked = event.target.checked;
    const currentSelectedSizes = [...formik.values.selectedSizes];

    if (isChecked) {
      if (!currentSelectedSizes.includes(selectedSize)) {
        currentSelectedSizes.push(selectedSize);
      }
    } else {
      const index = currentSelectedSizes.indexOf(selectedSize);
      if (index !== -1) {
        currentSelectedSizes.splice(index, 1);
      }
    }

    formik.setFieldValue('selectedSizes', currentSelectedSizes);
  };
  const handleColorsChange = (event) => {
    const selectedColor = event.target.value;
    const isChecked = event.target.checked;
    const currentSelectedColors = [...formik.values.selectedColors];
    if (isChecked) {
      if (!currentSelectedColors.includes(selectedColor)) {
        currentSelectedColors.push(selectedColor);
      }
    } else {
      const index = currentSelectedColors.indexOf(selectedColor);
      if (index !== -1) {
        currentSelectedColors.splice(index, 1);
      }
    }
    formik.setFieldValue('selectedColors', currentSelectedColors);
  };
  const [show1, setShow1] = useState(false);
  const handleClose2 = () => setShow1(false);
  useEffect(() => {
    setShow1(true); // نمایش Popup به محض لود شدن سایت
  }, []);
  return (
    <div>
      <Mynav/>
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Upload Image 1</label>
          <div className="input-container">
            <input
              type="file"
              className="form-control w-50"
              onChange={(event) => handleImageUpload(event, 0)}
              accept="image/*"
            />
            {selectedImages[0] && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(selectedImages[0])}
                  alt="Uploaded Image 1"
                  className="img-fluid"
                />
              </div>
            )}
          </div>
        </div>
        <Modal show={show1} onHide={handleClose2}>
      <Modal.Body><div class="farsi-text">
      در این بخش از پروژه، شما می‌توانید اطلاعات مربوط به محصول، مثل عکس، نام محصول، رنگ‌بندی، سایز، و قیمت رو وارد کنید. همچنین تعداد موجودی محصول رو هم انتخاب می‌کنید. اگر کاربر تعدادی بیشتر از موجودی انتخاب کنه، سایت یک پیام خطا (error) نمایش می‌ده. <br />

ویژگی‌های کلیدی: <br />
1-عکس و مشخصات محصول: <br />
امکان اضافه کردن عکس محصول، نام، رنگ‌بندی، سایز، و قیمت وجود داره. <br />

2-موجودی و خطای انتخاب بیش از حد: <br />
شما می‌تونید تعداد موجودی محصول رو تعیین کنید و اگر کاربر بیشتر از موجودی انتخاب کنه، سایت خطا می‌ده. <br />

3-انتخاب دسته‌بندی (Category): <br />
در نهایت، شما دسته‌بندی محصول رو مشخص می‌کنید تا بدونید محصول در کدوم بخش سایت نمایش داده بشه. <br />

نمایش محصول در Component: <br />
برای نمایش محصولات، من یک کامپوننت واحد طراحی کردم که به عنوان قالب برای همه محصولات استفاده می‌شه. برای مثال، کامپوننت تیشرت، جوراب، و شلوار همگی به یک شکل نمایش داده می‌شوند، و نیازی به طراحی جداگانه برای هر محصول نیست. اما برای صفحاتی مثل About و Home، چون طراحی‌شون متفاوته، کامپوننت‌های اختصاصی براشون در نظر گرفتم تا بتونید ببینید این صفحات به چه شکلی نمایش داده می‌شن. <br />

نکته مهم: <br />
از هر محصول، فارغ از نوع کامپوننت، یک نسخه کپی شده و به کامپوننت Shopall فرستاده می‌شه. دلیل این کار رو در توضیحات مربوط به کامپوننت Shopall به طور کامل شرح می‌دم.</div></Modal.Body>
    </Modal>
        <div className="mb-3">
          <label className="form-label">Upload Image 2</label>
          <div className="input-container">
            <input
              type="file"
              className="form-control w-50"
              onChange={(event) => handleImageUpload(event, 1)}
              accept="image/*"
            />
            {selectedImages[1] && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(selectedImages[1])}
                  alt="Uploaded Image 2"
                  className="img-fluid"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Image 3</label>
          <div className="input-container">
            <input
              type="file"
              className="form-control w-50"
              onChange={(event) => handleImageUpload(event, 2)}
              accept="image/*"
            />
            {selectedImages[2] && (
              <div className="image-preview">
                <img
                  src={URL.createObjectURL(selectedImages[2])}
                  alt="Uploaded Image 3"
                  className="img-fluid"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control w-100"
            name="productName"
            value={formik.values.productName}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control w-100"
            name="price"
            min={1}
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <div className="checkbox-group">
              {colorsList.map((color) => (
                <div key={color} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="selectedColors"
                    value={color}
                    checked={formik.values.selectedColors.includes(color)}
                    onChange={handleColorsChange}
                  />
                  <label className="form-check-label">
                    {color}
                  </label>
                </div>
              ))}
            </div>
          </div>
        <div className="mb-3">
          <label className="form-label">Sizes</label>
          <div className="checkbox-group">
            {sizesList.map((size) => (
              <div key={size} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="selectedSizes"
                  value={size}
                  checked={formik.values.selectedSizes.includes(size)}
                  onChange={handleSizesChange}
                />
                <label className="form-check-label">
                  {size}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Stock for Selected Sizes</label>
          <input
            type="number"
            className="form-control w-100"
            name="stock"
            min={1}
            value={formik.values.stock}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select w-100"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option value="">Home</option>
            <option value="tshirt">T-shirt</option>
            <option value="about">about</option>
            <option value="shop">Shop</option>
          </select>
        </div>
        <button type="submit" className="btn submitpanel">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Panel;
