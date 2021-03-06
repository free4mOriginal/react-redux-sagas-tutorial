import React from "react";
import useFetch from "../hooks/useFetch";

const Post = () => {
  const articles = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <ul>
      {articles.data.length !== 0 ? (
        articles.data.map(el => <li key={el.id}>{el.title}</li>)
      ) : (
        <li>ERROR: {articles.er.message}</li>
      )}
    </ul>
  );
};

export default Post;

/*
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.errors.length === 0
          ? this.props.articles.map(el => <li key={el.id}>{el.title}</li>)
          : <li key=''>{this.props.errors}</li>}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const ran1 = Math.floor(Math.random() * 10);
  const ran2 = ran1 + Math.floor(Math.random() * 10) + 1;

  return {
    articles: state.remoteArticles.slice(ran1, ran2),
    errors: state.errors.slice()
  };
};

export default connect(mapStateToProps, { getData })(Post);
*/
