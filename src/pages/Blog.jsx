import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BlogCard from "../components/BlogCard/BlogCard";
import '../styles/Blog.css'
import {Helmet} from "react-helmet";
import {useMediaQuery} from "react-responsive";

export default function Blog (){
    const isBigScreen = useMediaQuery({query: 'only screen and (min-width: 1500px)'});
    const isMediumScreen = useMediaQuery({query: 'only screen and (min-width: 600px) and (max-width: 1499px)'});
    const isSmallScreen = useMediaQuery({query: 'only screen and (max-width: 599px)'});

    return (
        <div className="BlogPage">
            <Helmet>
                <title>Blog | Augusto Ildefonso</title>
            </Helmet>

            {isBigScreen && (
                <React.Fragment>
                    <NavBar currentPage='blog'/>
                    <div className='ContentAreaBlogPage'>
                        <h1 className='PageTitleBlog'>Blog</h1>

                        <div className='BlogCardsArea'>
                            <h2 className='NoPostsTitle'>No posts until the moment...</h2>
                        </div>

                    </div>
                </React.Fragment>
            )}

            {isMediumScreen && (
                <React.Fragment>
                    <NavBar currentPage='blog'/>
                    <div className='ContentAreaBlogPage'>
                        <h1 className='PageTitleBlog'>Blog</h1>

                        <div className='BlogCardsArea'>
                            <h2 className='NoPostsTitle'>No posts until the moment...</h2>
                        </div>

                    </div>
                </React.Fragment>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>

                    <div className='ContentAreaBlogPage'>

                        <NavBar currentPage='blog'/>

                        <h1 className='PageTitleBlog'>Blog</h1>

                        <div className='BlogCardsArea'>
                            <h2 className='NoPostsTitle'>No posts until the moment...</h2>
                        </div>

                    </div>
                </React.Fragment>
            )}


        </div>
    );
}