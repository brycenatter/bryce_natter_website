import React, { Component } from 'react';

class Post extends Component {
    state = { 
        title: this.props.title,
        text: this.props.text,
        imageUrl: this.props.imageUrl,
        date: this.props.date

    }
    render() { 
        return (
            <div className="media">
                <div>
                <h5 className="mt-0">{this.state.title}</h5>
                <div className='post-date'>{this.state.date}</div>
                </div>
                 
                <div className="media-body">
                    
                    
                    {this.state.text}
                </div>
            </div>
        );
    }
}
 
export default Post;