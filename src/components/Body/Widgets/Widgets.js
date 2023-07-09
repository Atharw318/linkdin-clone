import React from 'react'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import "./Widgets.css"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Linkedin is back", "Top news -900 readers" )}
        {newsArticle("Coronavirus update", "Top news -500 readers" )}
        {newsArticle("Tesla hits new High", "Top news -1200 readers" )}
        {newsArticle("BitCoin news", "Top news -900 readers" )}
        {newsArticle("India Top news ", "Top news -600 readers" )}
            
        </div>
    )
}

export default Widgets
