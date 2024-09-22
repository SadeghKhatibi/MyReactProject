import React , {useEffect} from 'react';
import './Error404.css';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
  const handelclick = () =>{
    navigate('/')
  }
  useEffect(() => {
    const container = document.querySelector('#container');
    console.log(container);

    const handleMouseMove = (e) => {
      let x = e.clientX / 5;
      let y = e.clientY / 5;
      container.style.backgroundPositionX = x + "px";
      container.style.backgroundPositionY = y + "px";
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='error403'>
    <div id="container">
      <div className="content">
        <h2>404</h2>
        <h4>Oops! We can’t seem to find the page you’re looking for.</h4>
        <a onClick={handelclick}>Return To Home</a>
      </div>
    </div>
    </div>
  );
};

export default Error404;
