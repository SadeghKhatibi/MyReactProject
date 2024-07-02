import React, { useEffect, useState } from 'react';
import './collaborate.css'
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/thumbnailcollabrage.webp'
import img2 from '../image/thumbnail2collabrage.webp'
import img3 from '../image/thumbnail-3collaborage.webp'
import img4 from '../image/thumbnail-4collaborage.webp'
import img5 from '../image/thumbnail-5collaborage.webp'
import img6 from '../image/thumbnail-6collbrage.webp'
import img7 from '../image/thumbnail-7collaborage.webp'
import img8 from '../image/thumbnail-8collaborage.webp'
import img9 from '../image/thumbnail_9collaborage.webp'
import img10 from '../image/thumbnail-10collaborage.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons';
import img11 from '../image/Ariolacollabrage.webp'
const Collaborate = () =>{
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const startScroll = 505;
  const maxWidth = 1469; // maximum width of the box
  const maxHeight = 1442; // maximum height of the box
  const minWidth = 400;
  const minHeight = 150;
  const isScrolled = scrollY > startScroll;
  const scrollFactor = isScrolled ? (scrollY - startScroll) : 0 ;
  const boxWidth = Math.min(minWidth + scrollFactor, maxWidth);
  const boxHeight = Math.min(minHeight + scrollFactor, maxHeight);

  const getColor = () => {
    if (boxWidth > 700 ) return 'white';
    if (boxWidth > minWidth && boxHeight > minHeight) return 'grey';
    return 'rgba(0,0,0,0)';
  };
  // عکس پشت سرهم
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalContainers = 10;

  const contents = [
    {
      image: img1 ,
      texts: [
        '',
        'THE 23RD CUNA CONFERENCE',
        'Recently we had Johnny Cupcakes speak at an annual conference of marketers and made the decision to offer our attendees a unique t-shirt designed by his team for the event. The shirt was VERY well received and he even stayed after speaking to autograph attendees’ t-shirts. The whole experience was seamless and the shirt became a treasured and unique memento of that year’s conference.'        ,
        '-Amy McGraw, CUNA Marketing & Business Development Council Annual Conference Committee',
      ]
    },
    {
      image: img2,
      texts: [
        '',
        'FAIRFAX HIGH SCHOOL',
        'After bringing Johnny in to speak to our school, we collaborated to create our senior class shirt. A special edition Johnny Cupcakes t-shirt, which was a screaming success!',
        '- Leonard Choi, Fairfax High School'
      ]
    },
    {
      image: img3,
      texts: [
        'Subheading',
        'GILLETTE',
        'P&G hired Johnny Cupcakes to create both a marketing campaign and t-shirt, which was given out for free as an incentive to customers who signed up for the Gillette Shave Club. Additional tees were sent out as gifts for Gillettes employees, top clients, and influencers.',
        ''
      ]
    },
    {
      image: img4,
      texts: [
        '',
        'HOUSE OF BLUES',
        'Johnny Cupcakes collaborated with House Of Blues for their 20th Anniversary! These celebratory, collectible tees were crafted and sprinkled across all of their locations!',
        ''
      ]
    },
    {
      image: img5,
      texts: [
        '',
        'HOSPITALITY INDUSTRY TECHNOLOGY EXPOSITION AND CONFERENCE',
        'HITEC, produced by HFTP - the worlds largest hospitality technology show, hired Johnny Cupcakes to produce a special t-shirt that they gave out to their attendees. The mission was to have merchandise and graphics that stood out from other conferences. Mission complete!',
        ''
      ]
    },
    {
      image: img6,
      texts: [
        '',
        'COACHELLA FESTIVAL',
        'COACHELLA FESTIVAL I had the pleasure of working with Johnny Cupcakes a few years ago for a collaborative t-shirt for the festival. They were quick, professional, and very easy to deal with. If given the opportunity, I would definitely work with them again.',
        ' -Jon Halperin, Coachella Festival'
      ]
    },
    {
      image: img7,
      texts: [
        '',
        'SUFFOLK UNIVERSITY',
        'We were blown away by the custom t-shirt design that the Johnny Cupcake team created! They did an excellent job incorporating our University’s mascot and school colors. The branding was perfect! The queue after the event went out the door, students couldn’t get their hands on the t-shirts quick enough! The next time we do a custom t-shirt we will definitely order double the quantity!',
        '-Alex Paterson, Suffolk University'
      ]
    },
    {
      image: img8,
      texts: [
        '',
        'GHOSTBUSTERS',
        'While working on an official celebration of the 1984 movie Ghostbusters with Sony, we teamed up with Johnny Cupcakes on releasing a limited edition t-shirt to include in the campaign. Not only was it one of the most successful aspects of the project, it was one of the easiest to make happen. Since dozens of the studios employees were already fans of the brand, just his inclusion alone became a immediate highlight. He has a legion of die-hard fans who understand that every product he releases is an extension of himself, something that forces him to focus on the quality of his clothing and, for lack of a better word, its specialness. I would strongly recommend trying to involve Johnny Cupcakes in anything youre doing; Youll be happy you did.',
        '-Jensen Karp, Gallery1988, Sony’s Ghostbusters campaign',
      ]
    },
    {
      image: img9,
      texts: [
        '',
        'THE SIMPSONS'        ,
        'Words to describe The Simpsons branded t-shirts, from our hugely successful collaboration, may also define Johnny Cupcakes’ fantastic team -- bright, bold, colorful and fun. The Simpsons is a crown jewel property for Fox and we were thrilled that the beloved animated family was represented so well by Johnny Cupcakes and received so warmly by consumers.',
        '-Ricardo Cruz, Director, US Licensing, 20th Century Fox Consumer Products',
        ''
      ]
    },
    {
      image: img10,
      texts: [
        '',
        'VIACOM TEENAGE MUTANT NINJA TURTLES',
        'Our experience with Johnny Cupcakes was exceptional! They are not only very professional, but also a pleasure to work with. With Johnny Cupcakes, you get great attention to detail and extremely high quality product. Our Teenage Mutant Ninja Turtles t-shirts could not have turned out any better!',
        '-Jamie GlazerNickelodeon / ViacomTeenage Mutant Ninja Turtles',
        ''
      ]
    }
    // ادامه لیست محتواها
  ];

  const handleNext = () => {
    if (currentIndex < totalContainers - 1) {
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
      <div className="container-fluid py-5 text-center">
        <div className='row justify-content-center align-items-center mb-5 pb-5 row-last'>
          <p className="align-items-center johnylast">356+ SPEAKING ENGAGEMENTS</p>
        </div>
      </div>
      {/*  */}
      <div className="sadegh-container mb-5 pb-5">
      <div
        className="sadegh-box mb-5 pb-5"
        style={{
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
        }}
      >
        <h1
          className="sadegh-text"
          style={{
            color: getColor(),
          }}
        >
          <p className='text-center fs-5'>Lets Collaborate & Create</p>
          <p className='text-center helpingtext'>CUSTOM MERCHANDISE FOR YOUR <br />COMPANY OR ORGANIZATION</p>
        </h1>
      </div>
      </div>
      <br />
      {/*  */}
      <div className="container-fluid family-container pt-5 mt-5 pb-5 mb-5 ">
        <div className='row text-center my-5 py-5'>
          <p className='fw-bolder fs-3'>Featured Past Projects</p>
        </div>
      {contents.map((content, index) => (
        <div key={index} className={`family-content ${index === currentIndex ? 'active' : ''}`}>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center family-imagediv">
              <img src={content.image} className="family-image me-5" alt={`content ${index + 1}`} />
            </div>
            <div className="col-md-4 d-flex flex-column">
              <p className="family-text">
                {content.texts.map((text , i)=>(
                  <p key={i} className={`highlited${i} mt-5`}>{text}</p>
                ))}
              </p>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      ))}
      <div className="family-navigation">
        {Array.from({ length: totalContainers }, (_, index) => (
          <div key={index} className={`nav-circle ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div>
      <div className="family-controls mb-5 pb-5">
        <button className="btn-circle" onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <button className="btn-circle" onClick={handleNext}><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
    </div>
    {/*  */}
    <div className="container promotion-container pt-5 pb-5 mb-5">
            <div className="row">
            <div className="col-md-6 width">
                    <img src={img11} alt="Promotion" className="promo-image" />
                </div>
                <div className="col-md-6 d-flex heigh flex-column promo-text pt-3">
                    <h1 className="promo-heading py-5 px-5">CORPORATE GIFTING</h1>
                    <p className='px-5 fs-5'>Most corporate gifting is predictable, outdated, and generic. Let's change that by thanking the people you appreciate with a unique gift! As a t-shirt brand that specializes in creating unique experiences, Johnny Cupcakes collaborates with organizations, meeting planners, and events to develop, design, and manufacture one-of-a-kind apparel for their customers, clients, and employees. We handle all aspects of the project until it’s delivered to your door! Our special pastry-box packaging is available as well! </p>
                    <p className='px-5 fs-5'>100 T-shirts is the minimum order for custom tees with an 8 week turnaround upon design approval. 50 T-shirts is the minimum order for a mix of non-custom, discounted, existing tees from our inventory with a 6 day turnaround. Due to high demand, we cannot accept every request.</p>
                </div>
            </div>
        </div>
        {/*  */}
        <div className='container my-5 py-5'>
      <div className="row">
        <div className='col-md-6 pe-5'>
          <p className='fs-3'>Chat with us today!</p>
          <p className='lasttext'>TREAT YOUR EMPLOYEES TO SOMETHING SWEET!</p>
        </div>
        <div className="col-md-6 ps-5">
          <div className='container'>
            <div className='row'>
              <div className="col-md-6">
    <input type="text" class="form-control is-valid" id="validationServer01" placeholder='Name' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
              </div>
              <div className="col-md-6">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="---@gmail.com"/>
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
              Please choose a username.
              </div>
              </div>
            </div>
            <div className='row'>
            <div className="col-12">
            <textarea class="form-control" id="validationTextarea" placeholder="Message" required rows={4}></textarea>
            <div class="invalid-feedback">
              Message
            </div>
            </div>
            </div>
            <div className='row'>
            <div class="mt-1">
    <button class="btn promo-button" type="submit">Submit form</button>
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
export default Collaborate;