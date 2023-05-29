import React, { Component } from 'react';
import GitHub from './github';

class GithubGroup extends Component {
    state = {
        repos: [],
    }
    
    async componentDidMount() {
        const api_call = await fetch('https://api.github.com/users/brycenatter/repos');
        const data = await api_call.json();
        this.setState({ repos: data });
    }


    render() { 
        return (
        <div className='m-2'>
            <div class="row gx-1 m-1">
                <div class="col gx-0 m-1">
                    <GitHub title={this.state.repos} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'}language={'Java'}></GitHub>
                </div>
                <div class="col gx-0 m-1">
                    <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'no descrfiptiom'}language={'Java'}></GitHub>
                </div>
            </div>
            <div class="row gx-1 m-1">
                <div class="col gx-0 m-1">
                    <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'}language={'Java'}></GitHub>
                </div>
                <div class="col gx-0 m-1">
                    <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'}language={'Java'}></GitHub>
                </div>
            </div>
        </div>
        );
    }
}
 
export default GithubGroup;