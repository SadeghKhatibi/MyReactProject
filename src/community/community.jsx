import React, { useState } from 'react';
import './community.css'
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/tiktokcoommunity.webp'
import img2 from '../image/twittercommunity.webp'
import img3 from '../image/Johnny_Cupcakesbaainakcommunity.webp'
import img4 from '../image/gazcommunity.webp'
import img5 from '../image/image.webp'
import img6 from '../image/sakhtemanjohnycommunity.webp'
import img7 from '../image/zanbachashcommunity.webp'
import img8 from '../image/instagramcommunity.webp'
import img9 from '../image/videocommunity.webp'
import img10 from '../image/basketcommunity.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube } from '@fortawesome/free-brands-svg-icons';
import img11 from '../image/facebookcommunity.webp'
import img12 from '../image/cupcakescommunity.webp'
import img13 from '../image/Bad-Review_community.webp'
import img14 from '../image/dosteshbabacherodasteshcommunity.webp'
import img15 from '../image/tatocommunity.webp'
import img16 from '../image/60bironcommunity.webp'
import img17 from '../image/sagcommunity.webp'
import img18 from '../image/khalkobirangicommunity.webp'
import img19 from '../image/arayeshdokhtarmoghermezcommunity.webp'
import img20 from '../image/pachehashonbalastcommunity.webp'
import img21 from '../image/armjohnyropardecommunity.webp'
import img22 from '../image/volkswagencommunity.webp'
import { faChevronLeft, faChevronRight , faStar } from '@fortawesome/free-solid-svg-icons';
const testimonials = [
  {
    rating: 5 ,
    user: '@r_kenney',
    title: 'YOU TRICKED MY MOM',
    content: `"First time I visited the store, must have been 2003-2004ish, I told my mom we were going into the city for cupcakes. Being from the burbs a trip to the city for my mom was rare. So we get to Newbury St. We pop into Newbury comics first and then over to the shop. I'll never forget, she goes “what the f*** … I thought you said there were cupcakes here?” Lol. She still likes to share this story anytime I’ve got my JC on. Been loyal ever since. ❤️"`
  },
  {
    rating: 5 ,
    user: 'Joey Byrnes - Pasadena, CA',
    title: 'JOHNNY CUPCAKES TATTOO',
    content: `"I remember my first Johnny cupcake shirt was from the store on Melrose. I had been shopping with friends that day, and we walked into Johnny’s bakery, and I was enamored with the decor and the theme fast forward to now and I own over 100 Johnny cupcakeshirts and have a Johnny cupcakes logo tattoo. Through the brand Johnny cupcakes, I have made friends that have become family."`
  },
  {
    rating: 5 ,
    user: 'Marissa Elise - Deerfield Beach, FL',
    title: 'MY MAIL LADY THOUGHT IT WAS REAL CUPCAKES',
    content: `"My mail lady, who’s the best, swore the packages had cupcakes in it. Actually the whole post office did. She was very disappointed when I told her there weren’t any cupcakes inside!"`
  },
  {
    rating: 5 ,
    user: '@that.ham.life',
    title: 'LIFE LONG FRIENDS',
    content: `"I discovered Johnny Cupcakes tees at a pop-up in the Phoenix, Arizona, area around 2009 I think… met a bunch of really kind, wonderful, accepting, welcoming, and like-minded people who also loved the brand and made lifelong friends! Still collect your tees and merch today and now buy for my whole family, including my two sons, 12 and 8, who have also grown up with the brand!!"`
  },
  {
    rating: 5 ,
    user: '@stephaniegoldenberg',
    title: 'INSPIRATION',
    content: `"Johnny Cupcakes inspired me to create an experience not just host an event. When I think of the logistics and to-do lists and the boring details, I reframe my thoughts to imagine how someone will feel if they have a wonderful experience. It motivates me to create something memorable, not just "get through" the event. It has changed everything for me. Thank you Johnny Cupcakes for helping me change my mindset."`
  },
  {
    rating: 5 ,
    user: 'Sydney Epter - Hendersonville, NC',
    title: '115+ T-SHIRTS',
    content: `"I’ve been a Johnny Cupcakes fan for about 12 years. Watching the company and Johnny grow over the years has been so great! I became really active in the community and had over 115+ shirts at one point and I loved every one of them! In 2018, my mom passed and, to my surprise, a bouquet of flowers from Johnny Cupcakes came to her service. How incredible is it to be a part of a community to reach out and do something so sweet during the hardest thing I’ve ever gone through? I will never forget that gesture."`
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        return (
          <i
            key={index}
            className={`fas fa-star ${index < rating ? 'filled' : ''}`}
          ></i>
        );
      })}
    </div>
  );
};

const Community = () =>{
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
 return(
    <div>
      <Mynav/>
      <div className='none'>
      <div className="container-fluid py-5 text-center">
        <div className='row justify-content-center align-items-center mb-3 row-lastcommunity'>
          <p className="align-items-center johnylastcommunity">22+ YEARS OF COMMUNITY</p>
        </div>
      </div>
      {/*  */}
        <div className="row">
          <div className="col-md-6 ps-4">
            <div className="container">
              <div className="row">
                <div className="col-12 ps-4">
                <img src={img3} alt="Promotion" className="img-fluid promo-image img35" />
                </div>
              </div>
              <div className="row">
              <div class="col-12">
                        <div class="box position-relativecommunity w-100 mt-4 ps-2">
                            <img src={img4} className="img-fluid promo-image gaz" alt="Johnny's Journey"/>
                        </div>
                    </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                <img src={img1} alt="Promotion" className="img-fluid promo-image img2nafarcommunity " />
                </div>
                <div className="col-md-6 pading">
                <img src={img2} alt="Promotion" className="img-fluid promo-image imgtwitter" />
                </div>
              </div>
              <div className="row">
              <div class="col-12 d-flex align-items-stretch">
                        <div class="box position-relativecommunity mt-4 pe-4">
                            <img src={img5} className="w-100 img-fluid promo-image img35" alt="Johnny's Journey"/>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      {/*  */}
      <div className="row mt-4">
        <div className='col-md-6'>
          <div className="container">
            <div className="row ps-3">
              <div className="col-md-6">
                <img src={img6} className='img-fluid promo-image imgsakhteman' alt="" />
              </div>
              <div className="col-md-6">
              <video className="video" controls>
                <source src="path/to/video.mp4" type="video/mp4"/>
              </video>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 ps-4">
        <img src={img7} className='img-fluid promo-image imgzan' alt="" />
        </div>
      </div>
      {/*  */}
      <div className="row mt-4">
          <div className="col-md-6 ps-4">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <video className="video2" controls>
                  <source src="path/to/video.mp4" type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                <img src={img8} alt="Promotion" className="img-fluid promo-image imginst " />
                </div>
                <div className="col-md-6 pading">
                <img src={img9} alt="Promotion" className="img-fluid promo-image imgvideo" />
                </div>
              </div>
              <div className="row">
              <div class="col-12 d-flex align-items-stretch">
                <div class="box position-relativecommunity mt-4 pe-4">
                  <img src={img10} className="w-100 img-fluid promo-image basket" alt="Johnny's Journey"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row mt-4 align-items-center">
          <div className="col-md-6 ps-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                <img src={img11} alt="Promotion" className="img-fluid promo-image imgfacebook" />
                </div>
                <div className="col-md-6">
                <img src={img12} alt="Promotion" className="img-fluid promo-image imgcupcak" />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 ps-4'>
            <div className="container">
              <div className="row">
                <div className="col-12 text-center youtub">
                  <p className=''><FontAwesomeIcon icon={faYoutube} /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* جای نظرات */}
        <div className="testimonials-containercommunity mt-4">
      <div className="testimonialscommunity" style={{ transform: `translateX(-${currentIndex * (100 / 2.74)}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-box">
            <StarRating rating={testimonial.rating} />
            <h6 className='text-muted huser'>{testimonial.user}</h6>
            <h6 className='mt-3'>{testimonial.title}</h6>
            <p>{testimonial.content}</p>
          </div>
        ))}
      </div>
      <div className="controlscommunity text-center">
        <button onClick={handlePrev} disabled={currentIndex === 0}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <button onClick={handleNext} disabled={currentIndex >= testimonials.length - 3}><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${((currentIndex + 3) / testimonials.length) * 100}%` }}></div>
      </div>
    </div>
        {/* جای نظرات */}
        <div className="row mt-4">
        <div className="col-md-6 ps-4">
            <div className="container">
              <div className="row ps-2">
                <div className="col-12 boxred text-center">
            <p className='pboxred'>"ONE TIME WE SOLD ACTUAL CUPCAKES ON APRIL FOOL'S DAY"</p>
          </div>
          </div>
          </div>
        </div>
        <div className='col-md-6'>
            <div className="container">
              <div className="row">
                <div className="col-12 text-center pe-5">
                <video className="video3" controls>
                  <source src="path/to/video.mp4" type="video/mp4"/>
                  </video>
          </div>
          </div>
          </div>
        </div>
        </div>
        {/*  */}
        <div className="row mt-4">
        <div className="col-md-6 pe-3">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                <img src={img13} alt="Promotion" className="img-fluid promo-image ax1" />
          </div>
          </div>
          </div>
        </div>
        <div className='col-md-6'>
            <div className="container">
              <div className="row pe-2">
                <div className="col-12 text-center pe-4">
                <img src={img14} alt="Promotion" className="img-fluid promo-image ax2" />
          </div>
          </div>
          </div>
        </div>
        </div>
        {/*  */}
        <div className="row mt-4">
        <div className="col-md-6 pe-3">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                <img src={img15} alt="Promotion" className="img-fluid promo-image ax1" />
          </div>
          </div>
          </div>
        </div>
        <div className='col-md-6'>
            <div className="container">
              <div className="row pe-2">
                <div className="col-12 text-center pe-4">
                <img src={img16} alt="Promotion" className="img-fluid promo-image ax2" />
          </div>
          </div>
          </div>
        </div>
        </div>
        {/*  */}
        <div className="row mt-4">
        <div className="col-md-6 pe-3">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center box position-relativecommunity w-100">
                <img src={img17} alt="Promotion" className="img-fluid promo-image gaz2" />
          </div>
          </div>
          <div className="row">
                <div className="col-12 text-center box position-relativecommunity w-100 mt-4">
                <img src={img18} alt="Promotion" className="img-fluid promo-image gaz2" />
          </div>
          </div>
          </div>
        </div>
        <div className='col-md-6'>
            <div className="container">
              <div className="row pe-2">
                <div className="col-12 text-center pe-4">
                <img src={img19} alt="Promotion" className="img-fluid promo-image ax2" />
          </div>
          </div>
          </div>
        </div>
        </div>
        {/*  */}
        <div className="row mt-4 mb-4">
        <div className="col-md-6 pe-3">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center box position-relativecommunity w-100">
                <img src={img20} alt="Promotion" className="img-fluid promo-image gaz2" />
          </div>
          </div>
          <div className="row">
                <div className="col-12 text-center box position-relativecommunity w-100 mt-4">
                <img src={img21} alt="Promotion" className="img-fluid promo-image gaz2" />
          </div>
          </div>
          </div>
        </div>
        <div className='col-md-6'>
            <div className="container">
              <div className="row pe-2">
                <div className="col-12 text-center pe-4">
                <img src={img22} alt="Promotion" className="img-fluid promo-image ax2" />
          </div>
          </div>
          </div>
        </div>
        </div>
        </div>
        {/*  */}
        <div className="container-fluid container-fluid1community py-5 text-center">
    <div className='row justify-content-center align-items-center mb-3 row-lastcommunity'>
        <p className="align-items-center johnylastcommunity">22+ YEARS OF COMMUNITY</p>
    </div>
</div>

<div className="container grid-container">
    <div className="grid-item">
        <img src={img3} alt="Promotion" className="img-fluid promo-image img35" />
    </div>
    <div className="grid-item">
        <img src={img1} alt="Promotion" className="img-fluid promo-image img2nafarcommunity" />
        <img src={img2} alt="Promotion" className="img-fluid promo-image imgtwitter" />
    </div>
    <div className="grid-item">
        <img src={img5} alt="Promotion" className="img-fluid promo-image promo-image2" />
    </div>
    <div className="grid-item">
        <img src={img4} alt="Promotion" className="img-fluid promo-image gaz" />
    </div>
    <div className="grid-item">
        <img src={img6} className='img-fluid promo-image imgsakhteman' alt="" />
        <video className="video" controls>
            <source src="path/to/video.mp4" type="video/mp4" />
        </video>
    </div>
    <div className="grid-item">
        <img src={img7} className='img-fluid promo-image imgzan' alt="" />
    </div>
    <div className="grid-item">
        <video className="video2" controls>
            <source src="path/to/video.mp4" type="video/mp4" />
        </video>
    </div>
    <div className="grid-item">
        <img src={img8} alt="Promotion" className="img-fluid promo-image imginst" />
        <img src={img9} alt="Promotion" className="img-fluid promo-image imgvideo" />
    </div>
    <div className="grid-item">
        <img src={img10} className="w-100 img-fluid promo-image basket" alt="Johnny's Journey" />
    </div>
    <div className="grid-item">
        <img src={img11} alt="Promotion" className="img-fluid promo-image imgfacebook" />
        <img src={img12} alt="Promotion" className="img-fluid promo-image imgcupcak" />
    </div>
    <div className="grid-item text-center">
        <div className="YouTube youtube1">
            <p className=''><FontAwesomeIcon icon={faYoutube} /></p>
        </div>
    </div>
    <div className="grid-item">
        <div className="testimonials-containercommunity">
            <div className="testimonialscommunity " style={{ transform: `translateX(-${currentIndex * (100 / 2.74)}%)` }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-box">
                        <StarRating rating={testimonial.rating} />
                        <h6 className='text-muted huser'>{testimonial.user}</h6>
                        <h6 className='mt-3'>{testimonial.title}</h6>
                        <p>{testimonial.content}</p>
                    </div>
                ))}
            </div>
            <div className="controlscommunity text-center">
                <button onClick={handlePrev} disabled={currentIndex === 0}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={handleNext} disabled={currentIndex >= testimonials.length - 3}><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${((currentIndex + 3) / testimonials.length) * 100}%` }}></div>
            </div>
        </div>
    </div>
    <div className="grid-item boxred text-center">
        <p className='pboxred'>"ONE TIME WE SOLD ACTUAL CUPCAKES ON APRIL FOOL'S DAY"</p>
    </div>
    <div className="grid-item">
        <video className="video3" controls>
            <source src="path/to/video.mp4" type="video/mp4" />
        </video>
    </div>
    <div className="grid-item">
        <img src={img13} alt="Promotion" className="img-fluid promo-image ax1" />
    </div>
    <div className="grid-item">
        <img src={img14} alt="Promotion" className="img-fluid promo-image ax2" />
    </div>
    <div className="grid-item">
        <img src={img15} alt="Promotion" className="img-fluid promo-image ax1" />
    </div>
    <div className="grid-item">
        <img src={img16} alt="Promotion" className="img-fluid promo-image ax2" />
    </div>
    <div className="grid-item">
        <img src={img17} alt="Promotion" className="img-fluid promo-image gaz2" />
    </div>
    <div className="grid-item">
        <img src={img18} alt="Promotion" className="img-fluid promo-image gaz2" />
    </div>
    <div className="grid-item">
        <img src={img19} alt="Promotion" className="img-fluid promo-image ax2" />
    </div>
    <div className="grid-item">
        <img src={img20} alt="Promotion" className="img-fluid promo-image gaz2" />
    </div>
    <div className="grid-item">
        <img src={img21} alt="Promotion" className="img-fluid promo-image gaz2" />
    </div>
    <div className="grid-item">
        <img src={img22} alt="Promotion" className="img-fluid promo-image ax2" />
    </div>
</div>

      <Footer/>
    </div>
  )
}
export default Community;
