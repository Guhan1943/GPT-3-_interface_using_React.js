import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import AI from "../../assets/AI.png";
function Header(){
    return(
        <div className="gpt3__header section__padding" id="home">
           <div className="gpt3__header-content"> 
                <h1 className="gradient__text">
                Let’s Build Something
                amazing with GPT-3
                OpenAI
                </h1>
                <p>
                Despite the discomfort, any assistance with travel would be appreciated. Not every thought brings the benefit of activity. Every indulgence brings joy, adding a lively change to the bond. Through the years, we have requested permission to hold gatherings.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
           </div>
                <div className="gpt3__header-image">
                    <img src={AI} alt="ai" />
                </div>
        </div>
    )
}

export default Header