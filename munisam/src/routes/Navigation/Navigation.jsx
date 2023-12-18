import React, { Fragment, useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './Navigation.scss'
import { UserContext } from "../../contexts/UserContext";
import { signOutCurrentUser } from "../../Utils/firebase/firebase.utils";

const Navigation = () => {
  const {currentUser} = useContext(UserContext)


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
            {currentUser ?(
              <span className="nav-link" onClick={signOutCurrentUser}>Sign Out</span>
            ) : (<Link className="nav-link" to="/auth">
            SIGN IN{" "}
        </Link>)}

            
        </div>

          
        

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
