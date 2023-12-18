import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './Navigation.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">

        <div className="logo-container">
          <Link className="logo-link" to="/">
            <CrwnLogo className='logo'/> 
          </Link>
        </div>

        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                Shop{" "}
            </Link>

            <Link className="nav-link" to="/auth">
                SIGN IN{" "}
            </Link>
        </div>

          
        

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
