import React, { Component } from 'react';

class Post extends Component {
    state = { 
        title: this.props.title,
        text: this.props.text,
        imageUrl: this.props.imageUrl,

    }
    render() { 
        return (
            <div className="media">
                 <img className="align-self-center mr-3" src={this.state.imageUrl} alt="Generic placeholder image"></img>
                <div className="media-body">
                    <h5 className="mt-0">{this.state.title}</h5>
                        {this.state.text}
                </div>
            </div>
        );
    }
}
 
export default Post;