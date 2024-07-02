import React from 'react';
import './abouttwo.css';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/gazcommunity.webp'
import img2 from '../image/Ariolacollabrage.webp'
import img3 from '../image/nontostabout2.webp'

const Abouttwo = () =>{
  return(
    <div>
      <Mynav/>
        <div className="container-fluid container-fluidabout2 divgray">
    <br /><br /><br /><br />
    <div className="row text-center pt-5">
        <p className='fw-bolder fs-4 mt-5 pt-4 text-white'>Visit Us At</p>
        <p className='matn2 text-white'>THE JOHNNY CUPCAKES <br /> FLAGSHIP BAKERY</p>
    </div>
</div>
<p className='ptext text-center'>332 <br /> NEWBURY <br /> STREET</p>
<div className="container-fluid container-fluidabout2">
    <div className="row my-5 py-4">
        <div className="col-md-4 col-12 mb-4">
            <p className='ms-4 fw-bolder fs-3'>HOURS</p>
            <p className='ms-4'>Open 11-7 Every Day</p>
        </div>
        <div className="col-md-4 col-12 mb-4">
            <p className='ms-4 fw-bolder fs-3'>ADDRESS</p>
            <p className='ms-4'>332 Newbury St.</p>
            <p className='ms-4'>Boston, MA 02116</p>
            <p className='ms-4'>USA</p>
            <p className='ms-4'>View on google maps</p>
        </div>
        <div className="col-md-4 col-12 mb-4">
            <p className='ms-4 fw-bolder fs-3'>CONTACT</p>
            <p className='ms-4'>PHONE: 617-375-0100</p><br />
            <p className='ms-4'>EMAIL: info@johnnycupcakes.com</p>
        </div>
    </div>
</div>
<div className="col-12 pb-3 mt-5">
    <img src={img1} id='imageabout2'/>
    <div className="overlayabout2 mt-5 pt-5">
        <h1 className="fonteabout2 pt-4">EXPLORE THE <br /> NEW BAKERY</h1>
    </div>
    <button className='button1'>+</button>
    <button className='button2'>+</button>
    <button className='button3'>+</button>
</div>
<div className="container mt-5 py-4 grid-container1">
    <div className="row grid-item">
        <div className="col-md-4 ">
            <img src={img1} alt="" className='img-fluid promo-imageabout2'/>
        </div>
        <div className="col-md-8 px-5 py-5 align-items-center justify-content-center promo-textabout">
            <h1 className="promo-headingabout2 mt-4 mx-4">NEWBURY STREET IS IN OUR HISTORY</h1>
            <p className="promo-details mt-4 mx-4">My dad and I transformed my flagship t-shirt shop to appear like an old fashioned bakery where I display culinary themed t-shirts in vintage, industrial refrigerators, and on baking racks. I even made it smell like frosting! This is and always has been the model for all of my stores. Even when you purchase a t-shirt, we package them in our signature pastry boxes.</p>
            <p className="promo-details mt-4 mx-4">I worked closely with the team behind many of Jeff Koons' balloon animal sculptures for some of the experience; The grand entrance is a GIANT 13' tall retro oven that secretly opens up to the other 90% of my shop; There's a wall of 27 vintage ovens that open and close at random times; and upon checkout, you'll pay at a stovetop where fake fire flickers. It’s like Willy Wonka and the Chocolate Factory, but Johnny Cupcakes and the T-shirt shop.</p>
            <p className="promo-details mt-4 mx-4">Our bakery aesthetic is so convincing, that customers are usually convinced they are walking into a bakery expecting to get a cupcake. My inner-jokester still gets a kick out of fooling hungry shoppers. Cupcake or not, customers usually leave with a t-shirt or a great story.</p>
        </div>
    </div>
    <br />
    <div className="row grid-item">
        <div className="col-md-8"></div>
        <div className="col-md-4 promo-textabout text-center px-5 py-5">
            <h1 className="promo-heading mt-5 mx-4">A FROSTING <br /> SCENTED <br /> SHOP</h1>
            <p className="promo-details mt-4 mx-4 mb-5">Experience the retail magic that is Johnny Cupcakes at 332 Newbury Street in Boston! Your lunchboxed <br /> T-shirt gets pulled out of a secret smoking oven!</p>
        </div>
    </div>
    <div className="row grid-item">
        <div className='col-md-6 ms-2 divblack'></div>
        <div className="col-md-6">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center box ">
                        <img src={img2} alt="Promotion" className="img-fluid gaz2" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center box mt-4">
                        <img src={img3} alt="Promotion" className="img-fluid gaz3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      <Footer/>
    </div>
  );
}
export default Abouttwo;