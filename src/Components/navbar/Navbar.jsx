import {useState} from "react";
import {RiMenu3Line , RiCloseLine} from "react-icons/ri";
import React from 'react';
import './navbar.css';
import logo from "../../assets/GPT-3.png"

const Menu = () =>(
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#Wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
)

function Navbar(){
    const [toggleMenu , setToogleMenu] = useState(false);

    return(
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3__navbar-links_containers">
                   <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ? 
                            <RiCloseLine color="#fff"size={27} onClick={()=>setToogleMenu(false)} /> : 
                            <RiMenu3Line color="#fff" size={27} onClick={()=>setToogleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_conatiners scale-up-center">
                        <div className="gpt3__navbar-menu_containers-links">
                            <Menu/>
                        </div> 
                        <div className="gpt3__navbar-menu_containers-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                         </div>   
                    </div>
                )}

            </div>
        </div>
        
    )
}

export default Navbar