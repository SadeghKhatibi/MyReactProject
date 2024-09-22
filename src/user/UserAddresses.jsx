import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserAddresses.css';
import { Link, useNavigate } from 'react-router-dom';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';

const UserAddresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'SADEGH KHATIBI',
      street: 'Enghelab Square',
      city: 'TEHRAN',
      country: 'IRAN',
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    city: '',
    country: ''
  });
  const [addButtonVisible, setAddButtonVisible] = useState(true);
  const [error, setError] = useState(''); 

  const handleEdit = (address) => {
    setCurrentAddress(address);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isAdding) {
      setNewAddress({ ...newAddress, [name]: value });
    } else {
      setCurrentAddress({ ...currentAddress, [name]: value });
    }
  };
  const validateAddress = (address) => {
    return address.name && address.street && address.city && address.country;
  };

  const handleSave = () => {
    if (isAdding) {
      if (validateAddress(newAddress)) {
        setAddresses([...addresses, { ...newAddress, id: addresses.length + 1 }]);
        setIsAdding(false);
        setNewAddress({
          name: '',
          street: '',
          city: '',
          country: ''
        });
        setAddButtonVisible(false); 
        setError('');
      } else {
        setError('Please fill in all fields.');
      }
    } else {
      if (validateAddress(currentAddress)) {
        setAddresses(addresses.map(addr => addr.id === currentAddress.id ? currentAddress : addr));
        setIsEditing(false);
        setError('');
      } else {
        setError('Please fill in all fields.');
      }
    }
  };

  const handleDelete = (id) => {
    const updatedAddresses = addresses.filter(addr => addr.id !== id);
    setAddresses(updatedAddresses);
    if (updatedAddresses.length === 0) {
      setAddButtonVisible(true); 
    }
  };
  const handleAdd = () => {
    setCurrentAddress({
      name: '',
      street: '',
      city: '',
      country: ''
    });
    setIsAdding(true);
    setIsEditing(true);
    setAddButtonVisible(false); 
    setError(''); 
  };
  const navigate = useNavigate();
  const handelclick = () =>{
    navigate('/User')
  }
  const handellogout = () =>{
    navigate('/Signup')
  }
  return (
    <div>
    <Mynav/>
    <div className="user-addresses-container">
      <nav className="navbar navbaradres navbar-light bg-light justify-content-between fixed-top">
        <a className="navbar-brand navbar-brandadres">ADDRESSES</a>
        <div className="d-flex">
          <a className="nav-link nav-linkadres" onClick={handelclick} href="#">Orders</a>
          <span> / </span>
          <a className="nav-link nav-linkadres active" href="#">Addresses</a>
        </div>
        <a className="nav-link nav-linkadres" onClick={handellogout} href="#">Logout</a>
      </nav>
      <div className="content-container">
        <div className="addresses">
          <h3 className="mt-5">ADDRESSES </h3>
          {isEditing ? (
            <div className="address-card mt-4">
              <h5 className="font-weight-bold">Edit address</h5>
              <form>
                <div className="form-group">
                  <label>Name <span className='setareh'>*</span></label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="name" 
                    value={isAdding ? newAddress.name : currentAddress.name} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Street <span className='setareh'>*</span></label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="street" 
                    value={isAdding ? newAddress.street : currentAddress.street} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>City <span className='setareh'>*</span></label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="city" 
                    value={isAdding ? newAddress.city : currentAddress.city} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Country <span className='setareh'>*</span></label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="country" 
                    value={isAdding ? newAddress.country : currentAddress.country} 
                    onChange={handleChange} 
                  />
                </div>
                <button 
                  type="button" 
                  className="btn promo-success mt-3" 
                  onClick={handleSave}
                >
                  Save
                </button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </form>
            </div>
          ) : (
            addresses.map((address) => (
              <div className="address-card mt-4" key={address.id}>
                <h5 className="font-weight-bold">Default address</h5>
                <p>{address.name}<br/>{address.street}<br/>{address.city}<br/>{address.country}</p>
                <div className="address-actions">
                  <a href="#" className="mr-3" onClick={() => handleEdit(address)}>Edit</a>
                  <a href="#" onClick={() => handleDelete(address.id)}>Delete</a>
                </div>
              </div>
            ))
          )}
{addButtonVisible && addresses.length === 0 && (
            <button className="btn promo-success mt-3" onClick={handleAdd}>Add address</button>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default UserAddresses;