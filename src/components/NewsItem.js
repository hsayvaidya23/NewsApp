import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl,newsUrl} = this.props;
        return (
        <div className="my-3">
            <div className="card">
                <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-89447573,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-56260/89447573.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{description} </p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem
