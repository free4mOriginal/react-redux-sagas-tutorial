import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle, removeArticle, updateArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    updateArticle: (article, id) => dispatch(updateArticle(article, id)),
    removeArticle: id => dispatch(removeArticle(id))
  };
}

function Form(props) {
  const [title, setTitle] = useState("");

  const handleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    props.addArticle({
      title,
      id: Math.floor(Math.random() * 10000000)
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default connect(null, mapDispatchToProps)(Form);


/*
CLASS COMPONENT VERSION

import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle, removeArticle, updateArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    updateArticle: (article, id) => dispatch(updateArticle(article, id)),
    removeArticle: id => dispatch(removeArticle(id))
  };
}

class Form extends Component {
  // class field for local state
  state = { title: "" };

  // by making handleChange into an arrow function we don't have to bind(), because lexical scope is to this class 
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // same as handleChange
  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    this.props.addArticle({
      title,
      id: Math.floor(Math.random() * 10000000)
    });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(Form);

*/