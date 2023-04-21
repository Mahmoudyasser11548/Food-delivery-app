import { Container } from 'reactstrap';
import Logo from '../../assets/imgs/res-logo.png';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../Redux/Reducers/cartUiSlice';
import { useEffect } from 'react';

const nav_Links = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Foods',
    path: 'foods'
  },
  {
    display: 'Cart',
    path: 'cart'
  }
]

const Header = () => {
  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const toggle = () => menuRef.current?.classList?.toggle("show__menu");
  const { totalQuantity } = useSelector(state => state.cart)
  
  const dispatch = useDispatch()

  const toggleCart = () => { 
    dispatch(cartUiActions.toggle())
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList?.add("header-onscroll");
      } else {
        headerRef.current?.classList?.remove("header-onscroll");
      }
    });

  }, []);


  return ( 
    <header className="header" ref={headerRef}>

      <Container>
        <nav className='nav d-flex align-items-center justify-content-between'>
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h5>Tasty Treat</h5>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggle}>
            <div className="menu d-flex align-items-center gap-5">
              {nav_Links.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                > { link.display } </NavLink>
              ))}
            </div>
          </div>

          <div className="icons d-flex align-items-center gap-4">
            <span className="cart" onClick={toggleCart}>
              <i className="ri-shopping-cart-line"></i>
              {totalQuantity === 0 ? '' : <span className="cart-count">{ totalQuantity }</span> }
            </span>

            <span className="user">
              <Link to='login' ><i className="ri-user-line"></i></Link>
            </span>

            <span className="toggle" onClick={toggle}>
              <i className="ri-menu-3-line"></i>
            </span>
          </div>
        </nav>
      </Container>

    </header>
  );
}

export default Header;