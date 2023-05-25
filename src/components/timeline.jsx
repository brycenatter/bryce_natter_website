import React, { Component } from 'react';
import Post from './post.jsx';

class TimeLine extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const api_call = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await api_call.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      this.state.posts.map(post => (
        <Post key={post.id} title={post.title} text={post.body} imageUrl = {"https://picsum.photos/50"} />
      ))
    );
  }
}

export default TimeLine;
