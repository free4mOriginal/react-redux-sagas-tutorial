import React, { useState, useEffect } from "react";

const Post = () => {
  const [remote, setRemote] = useState([]);
  const [er, setEr] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setRemote(data.slice(0, 10)))
      .catch(err => setEr(err))
  }, []);

  return (
    <div>
      <ul>
        {remote.length !== 0 ? (
          remote.map(el => <li key={el.id}>{el.title}</li>)
        ) : (
          <li>ERROR: {er.message}</li>
        )}
      </ul>
    </div>
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