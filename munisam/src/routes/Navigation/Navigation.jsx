import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as MuniSam } from '../../assets/diamond-svgrepo-com.svg'
// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import './Navigation.scss'
import { UserContext } from "../../contexts/UserContext";
import { signOutCurrentUser } from "../../Utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import { NavigationContainer,NavLinks,NavLink,LogoContainer } from "./Navigation.style";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to ='/'>
            <MuniSam className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            Shop{" "}
          </NavLink>
          {currentUser ? (
            <NavLink as = 'span' onClick={signOutCurrentUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN{" "}
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
