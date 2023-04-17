import React from 'react'


function NewsItem(props)   {
        let { title, description, imgUrl, newsUrl, date, source, author } = props

        return (
            <div>
                
                <div className="card" >
                <span className="badge rounded-pill bg-warning text-dark" style={{position: 'absolute', width: "max-content",right: "0%",zIndex:'1'}}>{source}</span>
                    <img className="card-img-top" src={!imgUrl ? "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" : imgUrl} alt="..." />
                    <div className="card-body">
                        <p className="card-text"><small className="text-muted"><i>On {!date?";":new Date(date).toDateString()} by {!author?"Anonymous":author}  </i> </small></p>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
