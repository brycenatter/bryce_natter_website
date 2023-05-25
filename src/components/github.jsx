import React, { Component } from 'react';

class GitHub extends Component {
    state = { 
        title: this.props.title,
        text: this.props.text,
        imageUrl: this.props.imageUrl,
    };

    // TODO: implment this differently when not building for looks
    styles = {
        div_customs: {
          backgroundColor: "#f1f1f1",
          width: "500px",
        },
    };


    render() { 
        return (
            <div className='container border border-2 rounded m-3' s>
                <div className='row'>
                    <div className='col-auto'>
                        <svg height="16" viewBox="0 0 16 16"  width="16" fill="blue" >
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                        </svg>
                    </div>
                    <div className='col'>
                        <a href="#">Primary link</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-auto'>Adding functionality to Umich lecture recordings through a Chrome extension</div>
                </div>
                <div className='row mb-2'>
                    <div className='col-auto'>
                        <svg height="16" viewBox="0 0 16 16"  width="16">
                            <circle cx={8} cy={8} r={8} fill="#3572A5" />
                        </svg>
                        
                    </div>
                    <div className='col'>Python</div>
                </div>
                
            </div>
        
        );
    }
}
 
export default GitHub;