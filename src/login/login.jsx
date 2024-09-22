import React , {useState , useEffect} from 'react';
import Mynav from '../Mynav/Mynav';
import Footer from '../footer/footer';
import './login.css'
import {Link , useNavigate} from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useDispatch } from 'react-redux';
import { Login1 } from '../authSlice';
import { Modal } from 'react-bootstrap';

const Login = ({ setIsLoggedIn }) =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (login(email, password)) {
      setIsLoggedIn(true);
      navigate('/panel');
      return;
    }
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedUserData);
      if (email === storedEmail && password === storedPassword) {
        setIsLoggedIn(true);
        navigate('/User');
      } else if (email === storedEmail || password === storedPassword) {
        dispatch(Login1());
        alert('Invalid email or password');
      } else {
        alert('No registered users found. Please sign up first.');
        navigate('/signup');
      }
    }
  };
  const [show1, setShow1] = useState(false);
  const handleClose2 = () => setShow1(false);
  useEffect(() => {
    setShow1(true); // نمایش Popup به محض لود شدن سایت
  }, []);
  return(
    <div>
      <Mynav/>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className='col-md-6 text-center password-input-container  my-5 py-4'>
          <p className='fs-1 fw-bolder'>LOGIN</p>
          <input type="email"
        placeholder="Email"
        className="mt-3 input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/><br />
          <input className="mt-3 input password-input"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="password-toggle-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? '👀' : '😶‍🌫'}
        </span>
        <br />
          <button class="btn promo-button" type="submit" onClick={handleLogin}>Login</button>
          <Link to="/Signup"><p className='fs-6 mt-4 plink'>Sign Up</p></Link>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Modal show={show1} onHide={handleClose2}>
      <Modal.Body><div class="farsi-text">
      در این قسمت، شما می‌تونید با استفاده از اطلاعات زیر وارد پنل مدیریت سایت بشید: <br />

ایمیل: ssadeghkhatibi@gmail.com <br />
رمز عبور: sadegh <br />
این پنل فقط برای مدیر سایت طراحی شده و هیچ شخص دیگری امکان دسترسی به آن را ندارد. اگر اطلاعات ایمیل و رمز عبور به درستی وارد نشوند، سایت شما را شناسایی نخواهد کرد و پیام درخواست ثبت‌نام (Register) نمایش داده می‌شود. <br /><br />
مراحل کار: <br />
1-خطا در ورود: <br />
در صورتی که اطلاعات اشتباه باشد، سایت پیام خطا نمایش می‌دهد و درخواست می‌کند که اطلاعات صحیح را وارد کنید.
اگر هر دو (ایمیل و رمز) اشتباه وارد شوند، کاربر باید ابتدا ثبت‌نام (Sign Up) انجام دهد. <br />
2-ثبت‌نام (Sign Up): <br />
پس از ثبت‌نام موفقیت‌آمیز، کاربر به صفحه‌ی ورود هدایت شده و با وارد کردن اطلاعات صحیح، وارد حساب کاربری خود می‌شود.

</div></Modal.Body>
    </Modal>
      <Footer/>
    </div>
  );
}
export default Login;