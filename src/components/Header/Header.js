import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import {useDispatch,useSelector} from "react-redux";
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';


function Header() {

  const user = useSelector(selectUser);
  

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();


  }
    return (
        <div className="header">
        <div className="header__left">
             <img src="https://image.flaticon.com/icons/png/512/174/174857.png" 
               className="header__logo"
               alt=""/>

             <div className="header__search">
             <SearchIcon />
             <input placeholder="Search" type="text"/>

             </div>

        </div>
        <div className="header__right">
           <HeaderOptions Icon={HomeIcon} title="Home" />
           <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
           <HeaderOptions Icon={WorkIcon} title="Jobs" />
           <HeaderOptions Icon={MessageIcon} title="Messaging" />
           <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
           <HeaderOptions avatar="https://lh5.googleusercontent.com/-bWuLVmHoCgE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclToGtmYGcg-JkxdrFPo_AwXfwTkA/s96-c/photo.jpg"
            title={!user? "me" : "logout" }
            onClick={logoutOfApp}
             />
           

        </div>
            
        </div>
    )
}

export default Header
