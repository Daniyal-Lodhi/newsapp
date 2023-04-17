import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


function News(props){

    
    const capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(props.category)}-TheNews`

    
    const [articles,setArticles] = useState([])
    // const [loading,setLoading] = useState([true])
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(null)

   

     
    const updateNews = async () => {

        // setLoading(true)
        props.setProgress(40)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pagesize=${props.pagesize}&category=${props.category}&page=${page}`;
        props.setProgress(10)

        let data = await fetch(url)
        props.setProgress(100)
        let fetchedData = await data.json()
        pageincrementor()
      
        setArticles(fetchedData.articles)
        setTotalResults(fetchedData.totalResults)
        // setLoading(false)
    }
    useEffect(()=>{
        updateNews()
    })

    const pageincrementor  = ()=>{
        if (page === 1){
            setPage(page+1)
        }
    }
    const fetchMoreData = async()=>{
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&pagesize=${props.pagesize}&category=${props.category}&page=${page}`;
        let data = await fetch(url)
        let fetchedData = await data.json()
        setArticles(articles.concat(fetchedData.articles))
        // setLoading(false)
        setTotalResults(fetchedData.totalResults)
        
        
      

    }
    // handlePrevious = async () => {
    //     setState({
    //         loading: true,
    //         articles: [],
    //         page: state.page - 1
    //     })
    //     updateNews()
    // }

    // handleNext = async () => {
    //     setState({
    //         loading: true,
    //         articles: [],
    //         page: state.page + 1
    //     })
    //     updateNews()

    // }




        return (

            <div>
                <h2 className=' mb-1 text-center ' id='h2News'>THE News-Headlines <br /> Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row  d-flex justify-content-center ">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-4  mx-auto" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={!element.description ? "" : element.description.slice(0, 60)} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    
}

News.defaultProps = {
    pagesize: 6,
    category: 'science',
    country: 'us'

} 

export default News