import React, { Component } from 'react';
import Colors from './resources/colors.json';

class GitHub extends Component {
    state = { 
        title: this.props.title,
        text: this.props.text,
        repoUrl: this.props.repoUrl,
        language: this.props.language,
    };

    getLanguageColor(){
        return Colors[this.state.language]['color'];
    }


    




    render() { 
        return (
            <div className='border border-2 rounded githubWhiteBG'>
                <div className='m-3'>
                <div className='row gx-0'>
                    <div className='col-auto gx-0  me-2'>
                        <svg height="16" viewBox="0 0 16 16"  width="16" fill="#656d76" className='pr-0'>
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                        </svg>
                        
                    </div>
                    <div className='col-auto gx-0'>
                        <a href={this.state.repoUrl} target="_blank" className='githubLink'>{this.state.title}</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-auto githubText'>{this.state.text}</div>
                </div>
                <div className='row mb-2 gx-0'>
                    <div className='col-auto gx-0 me-2'>
                        <svg height="12" viewBox="0 0 12 12"  width="12">
                            <circle cx={6} cy={6} r={6} fill={this.getLanguageColor()} />
                        </svg>
                        
                    </div>
                    <div className='col m-auto githubLanguage'>{this.state.language}</div>
                </div>
                
            </div>

            </div>
            
        
        );
    }
}
 
export default GitHub;