import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="card shadow-xl rounded-lg overflow-hidden h-96 flex flex-col">
          <div className="relative">
            <span className="badge rounded-pill bg-red-700 text-white text-xs absolute top-1 right-1 px-2 py-1">
              {source}
            </span>
          </div>
          <img
            src={!imageUrl ? "https://st2.depositphotos.com/1297553/8286/v/600/depositphotos_82861618-stock-video-big-news-newspaper-headline-intro.jpg" : imageUrl}
            className="w-full h-40 object-cover"
            alt="News"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h5 className="font-bold text-lg mb-2">{title}</h5>
            <p className="text-sm mb-2 flex-grow">{description}</p>
            <p className="text-xs text-gray-600 mb-2">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </p>
            <a 
              href={newsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-auto px-2 py-2 bg-black text-white text-xs font-semibold rounded hover:bg-gray-800 transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
