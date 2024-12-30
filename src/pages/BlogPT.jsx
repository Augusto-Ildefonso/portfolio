import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BlogCard from "../components/BlogCard/BlogCard";
import '../styles/Blog.css'
import {Helmet} from "react-helmet";

export default function BlogPT (){
    return (
        <div className="BlogPage">
            <Helmet>
                <title>Blog | Augusto Ildefonso</title>
            </Helmet>
            <div className='ContentArea'>
                <NavBar currentPage='blogpt'/>

                <h1 className='PageTitle'>Blog</h1>

                <div className='BlogCardsArea'>
                    <h2>Sem posts até o momento...</h2>
                </div>
            </div>
        </div>
    );
}