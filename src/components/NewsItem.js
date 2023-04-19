import React, { Component } from 'react'

export class NewsItem extends Component {
    render(props) {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    <img src={!imgUrl ? "https://images.news18.com/ibnlive/uploads/2022/05/nurse-16521700073x2.jpg?impolicy=website&width=510&height=356" : imgUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
