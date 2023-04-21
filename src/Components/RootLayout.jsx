import { Outlet } from "react-router-dom";
import { Header , Footer } from './index';
import CartBasket from "./CartBasket/CartBasket";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const showCart = useSelector(state => state.cartUI.isvisible)

  return ( 
    <>
      <Header />
      
      {showCart && <CartBasket />}
      
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;