import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './TopHeadline.css'

const TopHeadline = () => {
    const[articles,setArticles]= useState([]);
    useEffect(()=>{
        const url='https://newsapi.org/v2/everything?q=Apple&from=2021-03-05&sortBy=popularity&apiKey=8d6a0d13b8374fea9572ede9beceb4b3';
        fetch(url)
        .then(res=>res.json())
        .then(data =>setArticles(data.articles))
    },[])
    return (
        <>
         <div className="container new-area shadow-lg p-3 mb-5 bg-body rounded">
            {
                articles.map(article=><News article={article}></News>)
            }
        </div>
        </>
    );
};

export default TopHeadline;