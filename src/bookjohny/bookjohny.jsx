import React , {useState,useEffect} from 'react';
import './boojohny.css'
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/videobookjohny.webp'
import img2 from '../image/ghorbaghebookjohny.webp'
import img3 from '../image/khatkeshbookjohny.webp'
import img4 from '../image/anghoshtbookjonny.webp'
import img5 from '../image/ketabbookjohny.webp'
import img6 from '../image/ahanrobabookjohny.webp'
import img7 from'../image/maghzostokhonbookjohny.webp'
import img8 from '../image/lampbookjohny.webp'
import img9 from '../image/50bokjohny.webp'
import img10 from '../image/pazelbookjohny.webp'
import img11 from '../image/businessbookjohny.avif'
import img12 from '../image/virtualperson.avif'
import img13 from '../image/creativbookjohny.avif'
import img14 from '../image/customerch.avif'
import img15 from '../image/khodeshbamarof.webp'
import img16 from '../image/khodeahzardbookjohnny.jpeg'
import img17 from '../image/bookjohny2.jpeg'
import img18 from '../image/boojjohny3.jpeg'
import img19 from '../image/bookjohny4.jpeg'
import img20 from '../image/topicsbookjohny.jpeg'
import img21 from '../image/johnytosabzebookjohny.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import img22 from '../image/macbookjohny.avif'
import img23 from '../image/cardagainbookjohny.webp'
import img24 from '../image/lorealbookjohny.webp'
import img25 from '../image/momentumbookjohny.avif'
import img26 from '../image/incbookjohny.webp'
import img27 from '../image/audibookjohny.avif'
import img28 from '../image/uklbookjohny.avif'
import img29 from '../image/revivebookjohny.webp'
import img30 from '../image/mondelezbookjohny.avif'
import img31 from '../image/deloittebookjohny.webp'
import img32 from '../image/forbesbookjohny.webp'
import img33 from '../image/deltekbookjohny.avif'
import img34 from '../image/nationalbookjohny.avif'
import img35 from '../image/fedexbookjohny.avif'
import img36 from '../image/marriottbookjohny.avif'
import img37 from '../image/truevaluebookjohny.avif'
import img38 from '../image/SHSMDbookjohny.avif'
import img39 from '../image/NCRbookjohny.avif'
const Bookjohny = () =>{
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
  const maxWidth = 1469;
  const maxHeight = 1442; 
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
  // 
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('');

  const pages = [
    [img16, img17],
    [img18, img19],
    [ img20, img21 ],
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('next');
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 1000); 
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setFlipDirection('prev');
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 1000); 
    }
  };
return(
    <div>
      <Mynav/>
      <div className="container-fluid py-5 text-center">
        <div className='row justify-content-center align-items-center mb-5 pb-5 row-last'>
          <p className="align-items-center johnylastbook">356+ SPEAKING ENGAGEMENTS</p>
        </div>
      </div>
      {/*  */}
      <div className="sadegh-containerbook">
      <div
        className="sadegh-boxbook"
        style={{
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
        }}
      >
        <h1
          className="sadegh-textbook"
          style={{
            color: getColor(),
          }}
        >
          <p className='text-center fs-5'>Inspirational Storytelling</p>
          <p className='text-center helpingtextbook'>HELPING COMPANIES BUILD BRAND <br /> LOYALITY AND INSPIRE INNOVATION</p>
        </h1>
      </div>
      </div>
      {/*  */}
      <div className="col-12 text-center">
                  <img src={img1} id='imagebook'/>
                  <div className="overlaybook mt-5 pt-5">
                  <button className="btn video-play-button rounded-circle p-0" type="button">
                  <div className="circle-background"></div>
  <svg role="presentation" fill="none" focusable="false" width="80" height="80" className="icon icon-play-button" viewBox="0 0 48 48">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24Zm-3-19.15a.3.3 0 0 0 .462.253l7.545-4.85a.3.3 0 0 0 0-.505l-7.545-4.85a.3.3 0 0 0-.462.252v9.7Z" fill="#fff"></path>
  </svg>
</button>
                      <h1 className="fontebook pt-4">PLAY VIDEO</h1>
                  </div>
                  </div>
                  <div className="container my-5 py-5">
                    <div className="row">
                      <div className='col-md-3'></div>
                      <div className="col-md-6 text-center">
                        <p className='fs-3'>Tailored</p>
                        <p className='talks'>TALKS</p>
                        <p className='mt-5 pt-3'>WHY DO THOUSANDS BARE JOHNNY CUPCAKES LOGOS TATTOOED ON THEMSELVES AND CAMP OUT FOR WEEKS FOR COLLECTIBLE T-SHIRTS?</p>
                        <p className='mt-4'>NAMED "TOP INNOVATOR IN RETAIL" BY THE BOSTON GLOBE, JOHNNY STARTED 16 BUSINESSES BEFORE HE WAS 16 YEARS OLD. AT AGE 19 JOHNNY CUPCAKES FOUNDER JOHNNY EARLE, GREW HIS BUSINESS FROM A "JOKE" TO A MULTI-MILLION DOLLAR, HIGHLY EXCLUSIVE T-SHIRT BRAND WITH A WORLDWIDE CULT-LIKE FOLLOWING.</p>
                        <p className='mt-4'>THROUGH HIS TALKS AND CREATIVE CONSULTING, JOHNNY SHARES HOW TO START, GROW, OR REINVENT YOUR BUSINESS OR IDEA WITH LITTLE TO NO START UP MONEY. JOHNNY GIVES BLUEPRINTS ON BUILDING BRAND LOYALTY, CREATING EXPERIENCES, AND INSPIRING INNOVATION.</p>
                      </div>
                      <div className='col-md-3'></div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="container-fluid div-green my-5 py-5 text-center">
    <h2 className="featured-heading mt-5 pb-5">FUN FACTS</h2>
        <div className='row justify-content-center mb-5 pb-5'>
            <div className='col-4'>
                <img src={img2} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div>
            <div className='col-4'>
                <img src={img3} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div><div className='col-4'>
                <img src={img4} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div>
        </div>
        <div className='row justify-content-center mb-5 pb-5'>
            <div className='col-4'>
                <img src={img5} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div>
            <div className='col-4'>
                <img src={img6} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div><div className='col-4'>
                <img src={img7} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div>
        </div>
        <div className='row justify-content-center mb-5 pb-5'>
            <div className='col-4'>
                <img src={img8} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div>
            <div className='col-4'>
                <img src={img9} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div><div className='col-4'>
                <img src={img10} alt="Promotion" className="img-fluid img-fluidbook"/>
            </div>
        </div>
    </div>
    <div className="container text-center mt-5 pt-2">
            <div className="row justify-content-center my-3">
                <div className="col-3 col-md-3 pe-5">
                    <img src={img11} alt="Wired" className="img-fluid img-fluidbook featured-logo" />
                    <p className='promo-details pimagedetail fs-5 fw-bolder ps-5'>BUSINESSES</p>
                <p className='text-center ps-5'>Learn Johnny's secret recipes. Build brand loyalty, inspire creative thinking, cultivate community, learn to adapt with little resources, and craft a powerful brand.</p>
                </div>
                <div className="col-3 col-md-3 pe-5">
                    <img src={img12} alt="TEDx" className="img-fluid img-fluidbook featured-logo" />
                    <p className='promo-details pimagedetail fs-5 fw-bolder'>VIRTUAL & IN-PERSON</p>
                <p className='text-center'>Invite Johnny to be your keynote speaker virtually or in person. He can tailor his talk to fit with your theme or message, to plant seeds for success.</p>
                </div>
                <div className="col-3 col-md-3 ps-5">
                    <img src={img13} alt="WWD" className="img-fluid img-fluidbook featured-logo" />
                    <p className='promo-details pimagedetail fs-5 fw-bolder'>CREATIVE CONSULTING</p>
                <p className='text-center'>Have Johnny work with you and your team as an consultant, collaborator, or idea generator to jumpstart new projects or remix old ones.</p>
                </div>
                <div className="col-3 col-md-3 ps-5">
                    <img src={img14} alt="NPR" className="img-fluid img-fluidbook featured-logo me-5" />
                    <p className='promo-details pimagedetail fs-5 fw-bolder pe-5'>CUSTOM MERCH</p>
                <p className='text-center pe-5'>Collaborate with JC on custom merch for unique gifts! We handle planning, branding, designing, production, and fulfillment! A surprise for attendees!</p>
                </div>
            </div>
        </div>
        <div className="container promotion-containerbook pt-5 pb-5 mb-5">
            <div className="row">
            <div className="col-md-6">
                    <img src={img15} alt="Promotion" className="promo-imagebook" />
                </div>
                <div className="col-md-6 Named d-flex flex-column promo-textbook pt-3">
                    <h1 className="promo-headingbook py-5 px-5">NAMED AMERICA'S #1 YOUNG ENTREPRENEUR BY BUSINESSWEEK AND FEATURED IN INC. MAGAZINE'S FASTEST GROWING INDEPENDENT BUSINESSES.</h1>
                </div>
            </div>
        </div>
        {/*  */}
        <div className="book-container my-5">
      <div className={`book ${isFlipping ? 'flipping' : ''} ${flipDirection}`}>
        <div className="page left">
          <img src={pages[currentPage][0]} alt="Page Left" />
        </div>
        <div className="page right">
          <img src={pages[currentPage][1]} alt="Page Right" />
        </div>
        {currentPage < pages.length - 1 && (
          <div className="page next-right">
            <img src={pages[currentPage + 1][1]} alt="Next Page Right" />
          </div>
        )}
        {currentPage > 0 && (
          <div className="page prev-left">
            <img src={pages[currentPage - 1][0]} alt="Previous Page Left" />
          </div>
        )}
      </div>
      <button className="prev-button" onClick={handlePreviousPage}>&#9664;</button>
      <button className="next-button" onClick={handleNextPage}>&#9654;</button>
    </div>
    {/*  */}
    <div className="container  my-4 py-4">
    <h2 className="featured-heading mt-5 pb-2">TESTIMONIALS</h2>
    <div className="row">
        {/* <!-- Card 1 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
              <div className="container">
                <div className='row justify-content-center mt-3 ms-1'>
                  <div className="col-md-2 marginright">
                    <img src={img22} className='imgtestimon' alt="" />
                  </div>
                  <div className="col-md-10 ps-4 pt-2">
                  <div className="star-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-muted'>Lisa Apthorpe</p>
                </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                    <h5 className="card-title mx-3">McDonald's</h5>
                    <p className="card-text mx-3">"Johnny has a real ability to engage through storytelling; there was empathy, laughter and meaningful messages that had everyone reaching for their notebooks. I recommend Johnny as an inspiring and thought provoking speaker."</p>
                    </div>
                    </div>
              </div>
                </div>
            </div>
        </div>
        {/* <!-- Card 2 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
              <div className="container">
                <div className='row justify-content-center mt-3 ms-1'>
                  <div className="col-md-2 marginright">
                    <img src={img23} className='imgtestimon' alt="" />
                  </div>
                  <div className="col-md-10 ps-4 pt-2">
                  <div className="star-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-muted'>Lisa Apthorpe</p>
                </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                    <h5 className="card-title mx-3">Cards Against Humanity</h5>
                    <p className="card-text mx-3">"Johnny's talk was a huge inspiration and definitely helped shape the direction of our company. We work so hard to make all of the details in everything we do delightful and surprise people all the time."</p>
                    </div>
                    </div>
              </div>
                </div>
            </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="col-md-4">
            <div className="card">
            <div className="card-body">
              <div className="container">
                <div className='row justify-content-center mt-3 ms-1'>
                  <div className="col-md-2 marginright">
                    <img src={img24} className='imgtestimon' alt="" />
                  </div>
                  <div className="col-md-10 ps-4 pt-2">
                  <div className="star-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-muted'>Frédéric Rozé, CEO</p>
                </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                    <h5 className="card-title mx-3">L'Oréal</h5>
                    <p className="card-text mx-3">"Johnny inspired me to have more fun with my company!"</p>
                    </div>
                    </div>
              </div>
                </div>
            </div>
        </div>
        {/* <!-- Card 4 --> */}
        <div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img25} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Paul Gascoigne, Creative Director</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">Momentum Worldwide</h5>
        <p className="card-text mx-3">“With tales of entrepreneurial derring-do, Johnny Cupcakes speaks with passion, insight and hard earned experience. This is business building from the horse’s mouth, not from some consultant’s arse.”</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 5 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img26} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Eric Schurenberg, CEO</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">INC (booked 2x to speak!)</h5>
        <p className="card-text mx-3">“When Johnny Cupcakes spoke at Inc’s GROWCO conference, I didn’t know what to expect, but our people assured me he was a good speaker. That turned out to be a drastic understatement. Putting Johnny on the agenda was one of the best decisions!"</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 6 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img27} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Nathalie Carpenter</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">AUDI</h5>
        <p className="card-text mx-3">"Johnny is an energetic and excellent speaker that is highly engaging. Our entire team from corporate to dealer left the room benefiting from easy to implement best practices!"</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 7 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img28} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Jody Kaminsky, CMO</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">UKG (booked 2x to speak!)</h5>
        <p className="card-text mx-3">"Johnny truly was one of the most inspiring, energetic, thought-provoking, funny, and relevant speakers we've ever had."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 8 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img29} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Brandon Edwards, CEO</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">Revive Health</h5>
        <p className="card-text mx-3">"The line to meet Johnny went all the way through the entire exhibit floor out to the convention center common area - must have been 300 to 400 people, maybe more. I would recommend Johnny as a keynote speaker without any hesitation or qualification. He is a great guy, a great speaker, and will reflect well on any brand that engages with him."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 9 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img30} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Sally Barton, Senior Brand Equity Manager</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">Mondelēz International, Inc.</h5>
        <p className="card-text mx-3">"Johnny engaged the audience with his story, and made it relevant to the themes and ambitions of our conference. Most importantly, he inspired us to think differently, and even more, had a lasting effect as since the conference, colleagues have taken a "Johnny Cupcakes approach" to some of our business challenges!"</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 10 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img31} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Joseph Apke, Partner</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">Deloitte</h5>
        <p className="card-text mx-3">"Johnny captured the attention of everyone in the room and successfully challenged all of us to think a little differently about how we serve our clients as well as how we choose to live our lives. His enthusiasm is nothing but contagious, and his story and success is nothing but compelling."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 11 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img32} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Larissa Faw, Journalist</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">FORBES</h5>
        <p className="card-text mx-3">"Johnny should give a master class on keynote speaking since I have never seen audiences as devoted to his every word."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 12 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img33} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Sam Nohava, Marketing Director</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">DELTEK (booked 2x to speak!)</h5>
        <p className="card-text mx-3">"Although Johnny has excelled specifically within entrepreneurship and retail, his story is broadly applicable and was incredibly inspiring and entertaining. I believe everyone at our user conference left motivated to breathe new life into their organization, firm, business, etc and "do more of what makes you happy"</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card13 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img34} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Clark Ebbert, Conference Strategist</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">National Apartment Association (booked 2x to speak!)</h5>
        <p className="card-text mx-3">"Johnny Cupcakes is the real deal when it comes to keynote choices. His message is personal, funny, and highly relate-able. Our attendees are hard working and customer service focused, and he tailored his take-aways to specifically to their needs. The man spent nearly three hours greeting attendees who lined up to meet him, and clearly took joy in meeting everyone. I'd hire him again in a heartbeat!"</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 14 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img35} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Teena Rutledge, Marketing Manager</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">FEDEX</h5>
        <p className="card-text mx-3">We had over 650 attendees at the event and in post-event surveys Johnny scored the highest of all the 13 main speakers.</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 15 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img36} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Paige Sheedy, Senior Director</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">Marriott International</h5>
        <p className="card-text mx-3">"Johnny inspired our crowd with tales of personal growth, a-ha moments and successful business strategy, and our guests walked away feeling energized and ready to bring some of Johnny’s focus areas to life in their own business. We heard over and over again that he was a conference favorite- our attendees were thrilled!"</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 16 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img37} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Dave Elliot, SVP Marketing</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">True Value</h5>
        <p className="card-text mx-3">"Johnny has that rare ability to connect the story about his life and great brand success in a way that is completely relatable and therefore valuable to a diverse audience. I think when Johnny spoke to more than 2000 of us, everyone felt that he was speaking to them directly."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 17 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img38} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4 pt-2">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Society for Healthcare Strategy and Market Development</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">SHSMD</h5>
        <p className="card-text mx-3">"Johnny delivered the opening keynote at the Society for Healthcare Strategy and Market Development annual conference this year for about 1,700 people. He delivered a perfect opening night keynote - high energy, very funny, with a message of relentless customer focus that really resonated for our group of healthcare strategy leaders. I highly recommend him as a speaker."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div>
{/* <!-- Card 18 --> */}
<div className="col-md-4 mt-4">
<div className="card">
<div className="card-body">
  <div className="container">
    <div className='row justify-content-center mt-3 ms-1'>
      <div className="col-md-2 marginright">
        <img src={img39} className='imgtestimon' alt="" />
      </div>
      <div className="col-md-10 ps-4">
      <div className="star-rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='text-muted'>Aaron Gould, Communications Manager</p>
    </div>
    </div>
    <div className="row mb-3">
        <div className="col-md-12">
        <h5 className="card-title mx-3">NCR</h5>
        <p className="card-text mx-3">"What impressed me the most about Johnny's presentation was that he managed to captivate an audience made up of executives from U.S. banks and credit unions with his passion for trying new things, succeeding in the face of potential failure and willingness to push the limits in business. He was engaging, down to earth and inspiring."</p>
        </div>
        </div>
  </div>
    </div>
</div>
</div> 
    </div>
</div>
{/*  */}
<div className='container my-5 py-5'>
      <div className="row align-items-center">
        <div className='col-md-6 pe-5'>
          <p className='fs-3'>Inspire Your Team</p>
          <p className='lasttextbook'>TREAT YOUR AUDIENCE TO SOMETHING SWEET!</p>
          <p>Johnny Cupcakes can travel to you to speak at your organization or event. Johnny can also host up to 40 people in his award winning creative T-shirt shop on Boston's historic Newbury Street for a private creative offsite.</p>
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
  )
}
export default Bookjohny;