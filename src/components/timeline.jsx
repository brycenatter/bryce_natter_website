import React, { Component } from 'react';
import Post from './post.jsx';

class TimeLine extends Component {
  state = {
    posts: [
      {
        "id": 0,
        "title": "loading...",
        "content": "loading..."
      }
     

    ],
  }

  async componentDidMount() {
    const api_call = await fetch('https://api.npoint.io/7d1313ff693978088c92');
    const data = await api_call.json();
    this.setState({ posts: data["posts"] });
  }

  render() {
    return (
      this.state.posts.map(post => (<div className='max-w-container-2'>
        
        <Post key={post.id} title={post.title} text={post.content} />
        </div>
    
      ))
    );
  }
}

export default TimeLine;
