import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BlogCard from "../components/BlogCard/BlogCard";
import '../styles/Blog.css'
import {Helmet} from "react-helmet";

export default function Blog (){
    return (
        <div className="BlogPage">
            <Helmet>
                <title>Blog | Augusto Ildefonso</title>
            </Helmet>
            <div className='ContentArea'>

                <NavBar currentPage='blog'/>

                <h1 className='PageTitle'>Blog</h1>

                <div className='BlogCardsArea'>
                    <h2>No posts until the moment...</h2>
                </div>

            </div>
        </div>
    );
}