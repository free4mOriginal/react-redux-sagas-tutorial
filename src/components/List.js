import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, props) => {
  console.log('im here', props);
  return { articles: state.articles };
};

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(List);
