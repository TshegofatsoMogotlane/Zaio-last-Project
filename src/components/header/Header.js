// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { IoSearchCircleSharp } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
// import { RxDropdownMenu } from "react-icons/rx";
// import { Avatar } from '@mui/material';
// import { useHistory } from 'react-router-dom';
import "./Header.css";
// import { openModal } from '../../action/modalAction';
// import { logout } from '../../action/userActions';
// import Login from '../Login';
// import SignUp from '../SignUp';

const Header = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  //   const userLogin = useSelector(state => state.userLogin);
  //   const { userInfo } = userLogin;

  //   const openModalHandle = (component) => {
  //     dispatch(openModal("open", component));
  //   };

  //   const handleLogout = () => {
  //     dispatch(logout());
  //     history.push('/');
  //   };

  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl2kwRqTe5C8x1dhWDmcYHhvAt9TvidI_cUxDx-31ke5MEDPurQFewWPP-XXzXZto1y4E&usqp=CAU"
            className="header_logo"
            alt="logo"
          />
        </div>
        <div className="header-middle">
            <p>Places to Stays</p>
            <p>Experiencess</p>
            <p> Online Experience</p>
        </div>
        <div className="header_right">
          <p>Become a host</p>
          <GrLanguage />
          <div className="dropdown">
          {/* <ExpandMoreIcon className="dropdownbtn" /> */}
          {/* <div className="dropdown-content">
          {userInfo ? (
            <>
              <span>Account</span>
              <span onClick={handleLogout}>Log Out</span>
            </>
          ) : (
            <>
              <span onClick={() => openModalHandle(<SignUp />)}>Sign Up</span> 
              <span onClick={() => openModalHandle(<Login />)}>Log In</span> 
            </>
          )}
          <span>Help</span>
        </div> */}
        </div>
        <MdOutlineAccountCircle />
        </div>
      </div>
      <div className="header_center">
        <input type="text" />
        <IoSearchCircleSharp />
      </div>
    </>
  );
};

export default Header;
