import LogoSvg from '../assets/logo.svg';

function Header() {
  return (
    <header className="flex justify-between items-center">
      <img src={LogoSvg} />

      <div className="flex space-x-12 text-body_regular2">
        <a href="#">Home</a>
        <a href="#">Service</a>
        <a href="#">Feature</a>
        <a href="#">Product</a>
        <a href="#">Testimonial</a>
        <a href="#">FAQ</a>
      </div>

      <div className="flex space-x-8 items-center text-body_medium3">
        <a href="#" className="text-primary">
          Login
        </a>
        <button className="bg-primary px-5 py-2 text-neutral-white rounded-md">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
