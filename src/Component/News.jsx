import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=72b70e5662ff468c8b5eb65ca7b00144&page=${page}&pageSize=${pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const { country, category, pageSize } = this.props;
    const { page, articles } = this.state;
    let nextPage = page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=72b70e5662ff468c8b5eb65ca7b00144&page=${nextPage}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: nextPage,
    });
  };

  render() {
    const { articles, loading, totalResults } = this.state;
    return (
      <>
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-3xl font-bold text-center text-black mt-4 mb-8">
            <span className="text-black">News Monkey</span> - Top{" "}
            {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h1>
          {loading && <Spinner />}
          <InfiniteScroll
            dataLength={articles.length}
            next={this.fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {articles.map((element) => (
                <div key={element.url} className="shadow-lg rounded-lg overflow-hidden">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description ? element.description.slice(0, 88) : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default News;
