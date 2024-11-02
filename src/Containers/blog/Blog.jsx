import React from 'react';
import {Article} from "../../Components";
import {blog01,blog02,blog03,blog04,blog05} from "./import"
import './blog.css';

function Blog(){
    return(
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                     A lot is happening, 
                    We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="Mar 26, 2023" title="GPT-3 Writes Its Own Paper: Ethics and Implications"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="Mar 29, 2022" title="AI Generates Its Own Research Paper:A New Frontier"/>
                <Article imgUrl={blog03} date="Oct 25, 2020" title="Risks and Rewards of GPT-3’s Language Abilities"/>
                <Article imgUrl={blog04} date="Jun 30, 2022" title="Researcher Submits GPT-3’s Self-Written Paper for Review"/>
                <Article imgUrl={blog05} date="Mar 26, 2023" title="Can GPT-3 Authentically Write Its Own Thesis?" />
                </div>​e
            </div>
        </div>
    )
}

export default Blog