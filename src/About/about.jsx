import React , {useState , useEffect} from 'react';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import img1 from '../image/johny abgosht.webp'
import img2 from '../image/kodak.webp'
import img3 from '../image/lebasashabout.webp'
import img4 from '../image/boghcheabout.webp'
import img5 from '../image/davaabout.webp'
import img6 from '../image/badostesh.webp'
import img7 from '../image/smnion.webp'
import img8 from '../image/tato.webp'
import img9 from '../image/sokanraniabout.webp'
import img10 from '../image/anbarabout.webp'
import img11 from '../image/BAKED1.webp'
import img12 from '../image/baked2.webp'
import img13 from '../image/baked3.webp'
import img14 from '../image/baked4.webp'
import img15 from '../image/baked5.webp'
import img16 from '../image/baked6.webp'
import { Button , Modal , Form} from 'react-bootstrap';
import { faChevronDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.css'
import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Modal1 from '../home/modal/modal';
const testimonials = [
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
  {
    image : img1 ,
    hoverImage: img2,
    texts: [
      'STICKERMA',
      '€4,95',
    ]
  },
];
// 
const About = () =>{
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
  const startScroll = 845;
  const maxWidth = 1469; // maximum width of the box
  const maxHeight = 1342; // maximum height of the box
  const minWidth = 400;
  const minHeight = 150;
  const isScrolled = scrollY > startScroll;
  const scrollFactor = isScrolled ? (scrollY - startScroll) : 0 ;
  const boxWidth = Math.min(minWidth + scrollFactor, maxWidth);
  const boxHeight = Math.min(minHeight + scrollFactor, maxHeight);

  const getColor = () => {
    if (boxWidth > 900 ) return 'white';
    if (boxWidth > minWidth && boxHeight > minHeight) return 'grey';
    return 'rgba(0,0,0,0)';
  };
  // مال عکس container
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalContainers = 9;

  const contents = [
    {
      image: img2 ,
      texts: [
        'The Birth / First Hustles',
        'I HAD 16 DIFFERENT BUSINESSES BEFORE I WAS 16.',
        'As a little boy, I would see my parents spend so much time in traffic commuting to and from work. This inspired me to be an entrepreneur with the hope that someday I could work and still be able to spend time with the people I love.',
        'Despite having learning difficulties combined with the inability to sit still and concentrate, when I did discover something I realized I had a passion over, I obsessed over it. That particular passion was being an entrepreneur.',
        'From lemonade stands to performing magic, I had sixteen different businesses before I was sixteen. I knew I had that entrepreneurial spirit, especially when my friends hung out with cute girls at parties, I hung out with cute old ladies at Jo-Ann Fabrics, where I started a fleece scarf business.'
      ]
    },
    {
      image: img3,
      texts: [
        'The Start / T-shirts',
        'MORE THAN ANYTHING, IT MADE PEOPLE SMILE.',
        'After I graduated from high school and took a short break from college, my friends and I started a hardcore metal band. I also scored a job at Newbury Comics, a local record store where my co-workers awarded me with random nicknames. Anything goes well after Johnny, including ‘Come-Lately’ if I was late to work. The nickname that stuck was ‘Johnny Cupcakes.’ While I was making a t-shirt order for my band, I thought it would be hilarious to get a few with my new moniker. I wore one to work, and the word spread like wildfire. Everyone wanted one!',
        'A food themed clothing brand was weird to many people, but weird is good! It gets people talking. I started making more Johnny Cupcakes t-shirts that poked fun of pop culture, replacing known references with cupcakes. One particular logo, the one most identifiable with Johnny Cupcakes today is a cupcake with crossbones. Guys thought it was funny and girls thought it was cute. The design caused curiosity and conversation amongst strangers. More than anything, it made people smile.'
      ]
    },
    {
      image: img4,
      texts: [
        'Making Time',
        'BEFORE I KNEW IT, MY JOHNNY CUPCAKES T-SHIRTS CAUGHT THE ATTENTION OF SO MANY PEOPLE!',
        'I started selling t-shirts out of the trunk of my beat up ’89 Toyota Camry. Then out of my crusty suitcase while on tour with my band On Broken Wings. People all around the country began to purchase them. Before I knew it, my Johnny Cupcakes t-shirts caught the attention of so many people, and making them quickly became my passion.',
        'I took a risk by quitting my day job and my band, as I knew launching this brand would require 100% of my energy. Instead of playing loads of video games or partying like most or my peers, I chose to spend my time and money building the foundation of my new independent clothing line, Johnny Cupcakes.'
      ]
    },
    {
      image: img5,
      texts: [
        'Worlds First T-Shirt Bakery',
        'CUSTOMERS ARE USUALLY CONVINCED THEY ARE WALKING INTO A BAKERY',
        'As I spent more time on the clothing line, it grew so much I had decided to re-launch my online store. Slowly but steadily a cult following was brewing so much that my entire house became filled with orders to be shipped internationally. My whole family became involved, my mom and sister helped fulfill orders while my dad created a storage space in the attic. After hiring friends to help out, the only logical thing to do next was to open a retail store.',
        'When it came time to open a store, I really wanted it to be an unforgettable experience. My dad and I transformed my first store location into an old fashioned bakery where I displayed t-shirts in vintage, industrial refrigerators and on baking racks. I even made it smell like frosting! This is and always has been the model for all of my stores. Even when you purchase a t-shirt, we package them in our signature pastry boxes. My inner-jokester still gets a kick out of fooling hungry shoppers. Cupcake or not, customers usually leave with a t-shirt or a great story. However, one April Fools Day we sold real cupcakes and hid all of our t-shirts!'
      ]
    },
    {
      image: img6,
      texts: [
        'Press Features',
        'TOP INNOVATOR IN RETAIL',
        'I’ve always taken my advertising budget and put it into building unique experiences through our products, packaging, events, and retail environments. By doing this, people end up doing the advertising for us through word of mouth. Through the unique nature of the brand, we’ve been featured in press outlets that I would have never imagined in my life!',
        'Johnny Cupcakes has been featured in FORBES, NPR, BusinessWeek, INC Magazine, Wall Street Journal, WIRED, New York Times, The Boston Globe, Los Angeles Times; and seen on MTV, Bloomberg TV, MAKER, Attack Of The Show, The Food Network, WWD. Also, if you look close enough, you’ll see some of our tote bags in the Seth Rogan movie, This Is The End. What blows my mind even more, is that the Johnny Cupcakes brand has been a case study in several branding and business books. We’ve even had some notable customers like, Nas, John Stamos, Kevin Garnett, Spike Lee, iJustine, Jacks Gap, Duff Goldman, Travie McCoy, MURS and A Day To Remember!'
      ]
    },
    {
      image: img7,
      texts: [
        'Collaborations',
        'JOHNNY CUPCAKES WAS QUICK, PROFESSIONAL, AND VERY EASY TO DEAL WITH',
        'Another way we’ve reinvented the Johnny Cupcakes brand, has been collaborating with a variety of companies, people, musicians and properties. Some include, Nickelodeon, Marilyn Monroe’s estate, Teenage Mutant Ninja Turtles, House of Blues, The Simpsons, Mike Napoli, Bicycle Playing Cards, Suffolk University, Linkin Park, Kamp Grizzly, Hello Kitty, G-Shock, Gillette, Warner Bros. and Coachella.',
        'We also do our best to give back to our community by donating time to organizations in need every day. We sponsor art foundations, sports teams, booster clubs and camps in my hometown of Hull. We support local charities like Wellspring, Boston Children’s Hospital and the Saint Rock Haiti Foundation as well as international organizations like the Red Cross and the Susan G. Komen Foundation. We try to donate product to fundraisers across the country almost every day.'
      ]
    },
    {
      image: img8,
      texts: [
        'Brand Loyalty',
        'CUSTOMERS AROUND THE WORLD WITH MY BRANDS LOGO TATTOOED ON THEM!',
        'I wanted to take it back to my roots of selling t-shirts out of my suitcases by personally driving around the entire USA and opening up one day pop up shops in every major city. We called it The Suitcase Tour. To further the experience, we sold limited edition tees out of vintage suitcases! A few years later, we did it again during October. To fit with the spooky season, we called it, The Coffin Tour! Each pop up shop was set up like a haunted house, while we sold limited edition Halloween themed t-shirts out of actual coffins!',
        'We’ve hosted movie nights for our customers, dodgeball events, charity events, scavenger hunts, in-store performances with musicians, haunted houses, barbecues and pizza parties. I have started to engage with my customers on a personal level with the use of social media. I’ve tweeted my location, announcing, “Show up at this ice cream shop with your Johnny Cupcakes t-shirt on, and I’ll treat you to dessert!” It amazes me to see hundreds of fans come by. I continue to run these experiments when I travel. Fans camp out for weeks for limited release items or they are excited to show off their JC tattoo.'
      ]
    },
    {
      image: img9,
      texts: [
        'Fostering Entrepreneurship',
        'KEEP POSITIVE AND DO MORE OF WHAT MAKES YOU HAPPY!',
        'With Johnny Cupcakes being a case study in several branding and business books, Ive been invited to give keynote presentations at professional events, large businesses, and schools—helping other people create blueprints for building brand loyalty, creating memorable experiences, and inspiring innovation. Pass thislinkalong if you’d like me to speak at an event, and perhaps we could bring the Johnny Cupcakes pop-up shop experience too!',
      ]
    },
    {
      image: img10,
      texts: [
        'Notes From The Kitchen',
        'I ENJOY BRINGING OUT THE KID IN EVERYONE',
        'I enjoy bringing out the kid in everyone. Not in the sense of getting loads of people pregnant, but you know, making other people feel happy! Im continuing to do so with my experience-based brand. Weve opened up more than 400+ pop-up shops around the world! Backyard BBQs, art galleries, sneaker shops, universities, actual bakeries, and even on the side of the street! This has been a great way to meet all of the lovely people who support the brands online shop, who cant make it out to my flagship shop in Boston.',
        'Currently, Im writing a book, releasing a monthly printed zine, traveling for speaking engagements, and practicing the delicate and beautiful work-life balance. Im making more time to eat Korean BBQ, play competitive ping-pong, and learn new magic tricks. If you made it this far, send a hello to me via my instagram, twitter, Facebook, or YouTube. I appreciate you supporting and sharing this brand with your friends and family!',
        'Do More of What Makes You Happy <3 Johnny Earle aka Johnny Cupcakes'
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
  // 
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [isModalOpen1, setModalOpen1] = useState(false);

  const product = {
    name: "World's Softest Embroidered Mini Crossbones Zip (Hot Pink)",
    image: img1, // مسیر صحیح تصویر را اینجا قرار دهید
    price: '€92,95',
    sizes: ['Adult / Small', 'Adult / Medium', 'Adult / Large', 'Adult / XL', 'Adult / 2XL', 'Adult / 3XL'],
    color: 'Pink'
  };
  const handleClick = () => {
    setModalOpen1(true);
    handleShow1();
  };

  return(
    <div>
      <Mynav/>
      <div className="container-fluid container-fluid1 py-5 text-center">
            <div className='row justify-content-center align-items-center mb-5 pb-5 row-lastabout'>
                <p className="align-items-center johnylastabout">2016+ PEOPLE HAVE THE JOHNNY CUPCAKES LOGO TATTOOED ON THEIR BODIES</p>
            </div>
            </div>
            {/* <div className="col-12 text-center"> */}
            <div className="sadegh-containerabout">
      <div
        className="sadegh-box"
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
          <p className='text-center fs-5'>the story of JOHNNY cupcakes</p>
          <p className='text-center fs-1'>JOHNNY'S JOURNEY</p>
        </h1>
      </div>
    </div>

    {/* </div> */}
    <div className='container mt-5 mb-5 pb-3'>
          <div className='col-12 text-center my-5'>
            <img src={img1} alt="" className='img-fluid promo-imageabout'/>
            <div className="overlayabout mt-5 pt-5">
  <button className="btn btnabout video-play-button rounded-circle p-0" type="button">
      <div className="circle-background"></div>
      <svg role="presentation" fill="none" focusable="false" width="80" height="80" className="icon icon-play-button" viewBox="0 0 48 48">
        <path fillRule="evenodd" clipRule="evenodd" d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24Zm-3-19.15a.3.3 0 0 0 .462.253l7.545-4.85a.3.3 0 0 0 0-.505l-7.545-4.85a.3.3 0 0 0-.462.252v9.7Z" fill="#fff"></path>
      </svg>
    </button>
          <h1 className="fonte pt-3">JOHNNY CUPCAKES BRAND REEL</h1>
                  </div>
          </div>
      </div>
      <br />
      {/*  */}
      <div className="container-fluid container-fluid1 family-container pt-5 mt-5 pb-5 mb-5">
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
        <button className="btn-circle btnabout-circle btnabout" onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <button className="btn-circle btnabout-circle btnabout" onClick={handleNext}><FontAwesomeIcon icon={faChevronRight}/></button>
      </div>
    </div>
      {/*  */}
      <div class="container-fluid container-fluid1 mt-5 pt-1">
            <div className="testimonials-containerabout mt-4 pb-5 ms-3">
  <div className="testimonialsabout">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="container">
        <div className="box imgboxabout">
          <img src={testimonial.image} alt="" className="img-fluid imgcartabout" />
          <img src={testimonial.hoverImage} alt="" className="hover-image"/>
          <Button className='button' variant="" onClick={handleClick}>+ Quick add</Button>
          </div>
        <div className="text-center1about">
          {testimonial.texts.map((text, i) => (
            <p key={i} className={`highlited${i}`}>{text}</p>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    <Modal show={show1} onHide={handleClose1}>
    <div class="modal-header"><div class="modal-title h4">Quick add</div><button type="button" class="btn-close btnabout" aria-label="Close" onClick={handleClose1}></button></div>
        <Modal.Body>
            <Modal1 isOpen={isModalOpen1} onClose={() => setModalOpen1(false)} product={product} />
        </Modal.Body>
      </Modal>
      <Footer/>
    </div>
  );
}
export default About;