import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";

const App = () => {
  return (
    <>
      <div>
        <h2>Articles</h2>
        <List someProps="prop"/>
      </div>
      <div>
        <h2>Add new article</h2>
        <Form />
      </div>
      <div>
        <h2>API Posts</h2>
        <Post />
      </div>
    </>
  );
};

export default App;
