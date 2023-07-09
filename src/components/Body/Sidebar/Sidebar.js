import { Avatar } from '@material-ui/core'
import React from 'react'
import {useSelector } from "react-redux"
import { selectUser } from '../../../features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>

    )
 

    return (
        <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://static-exp1.licdn.com/sc/h/5qi38njir9vsm46ync2qjvrrs" alt=""/>
            <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
        <div className="sidebar__stat">
            
            <p>Connections</p>
            <p className="sidebar_statNumber">454</p>
            
            
        </div>
        <div className="sidebar__stat">
            <p>Who viewed your profile</p>
            <p className="sidebar_statNumber">1421</p>
        </div>

        </div>
        <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software developer")}
        {recentItem("design")}
        {recentItem("developer")}
            
        </div>
            
        </div>
    )
}

export default Sidebar 
