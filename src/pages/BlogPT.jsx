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
                <div className='ContentAreaBlogPage'>

                    <NavBar currentPage='blogpt'/>

                    <h1 className='PageTitleBlog'>Blog</h1>

                    <div className='BlogCardsArea'>
                        <h2 className='NoPostsTitle'>Sem posts até o momento...</h2>
                    </div>

                </div>
            )}

            {isMediumScreen && (
                <div className='ContentAreaBlogPage'>

                    <NavBar currentPage='blogpt'/>

                    <h1 className='PageTitleBlog'>Blog</h1>

                    <div className='BlogCardsArea'>
                        <h2 className='NoPostsTitle'>Sem posts até o momento...</h2>
                    </div>

                </div>
            )}

            {isSmallScreen && (
                <React.Fragment>
                    <Helmet>
                        <meta name="theme-color" content="black"/>
                    </Helmet>

                    <div className='ContentAreaBlogPage'>

                        <NavBar currentPage='blogpt'/>

                        <h1 className='PageTitleBlog'>Blog</h1>

                        <div className='BlogCardsArea'>
                            <h2 className='NoPostsTitle'>Sem posts até o momento...</h2>
                        </div>

                    </div>
                </React.Fragment>
            )}


        </div>
    );
}