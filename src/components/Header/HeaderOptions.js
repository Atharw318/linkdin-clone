import { Avatar } from '@material-ui/core'
import React from 'react'
import {useSelector} from "react-redux";
import "./HeaderOptions.css"
import {  selectUser } from '../../features/userSlice';
function HeaderOptions({avatar,Icon,title, onClick}) {

    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOptions">
         {Icon && <Icon className="headerOption__icon"/>}
         {avatar && (
             <Avatar className="headerOption__icon" src={user?.photoUrl } >{user?.email[0]}</Avatar>
         )}
         <h3 className="headerOption__title">{title}</h3>
            
        </div>
    )
}

export default HeaderOptions
