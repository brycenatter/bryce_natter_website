import React, { Component } from 'react';
import GitHub from './github';

class GithubGroup extends Component {
    state = {
        repos: [],
    }
    
    

    async componentDidMount() {
        const api_call = await fetch('https://api.github.com/users/brycenatter/repos');
        const data = await api_call.json();
        await data.sort(this.customComp);
        this.setState({ repos: data });
    }

    customComp(a, b){
        //console.log(this.state.repos[0]);
        return a['updated_at'] > b['updated_at'] ? -1 : 1;
    }

    





    


    render() { 
        const { repos } = this.state;
        return (
            // this.state.repos.map((repo, index) => (
            //         <GitHub key={index} title={repo.name} text={repo.description} repoUrl={repo.html_url} language={repo.language} />
            // ))
            
        // <div className='m-2'>
        //     <div class="row gx-1 m-1">
        //         <div class="col gx-0 m-1">
        //             <GitHub title={this.state.repos[0]['name']} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'} language={'Java'}></GitHub>
        //         </div>
        //         <div class="col gx-0 m-1">
        //             <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'no descrfiptiom'}language={'Java'}></GitHub>
        //         </div>
        //     </div>
        //     <div class="row gx-1 m-1">
        //         <div class="col gx-0 m-1">
        //             <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'}language={'Java'}></GitHub>
        //         </div>
        //         <div class="col gx-0 m-1">
        //             <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'}language={'Java'}></GitHub>
        //         </div>
        //     </div>
        // </div>

        <div className='m-2 container-flex'>
        {repos.length > 0 ? (
            <div>
            <div className='row gx-1 m-1 '>
                <div className='col gx-0 m-1 '>
                    <GitHub
                        title={repos[0].name}
                        repoUrl={repos[0].html_url}
                        text={repos[0].description}
                        language={repos[0].language}
                    ></GitHub>
                </div>
                <div className='col gx-0 m-1 '>
                <GitHub
                    title={repos[1].name}
                    repoUrl={repos[1].html_url}
                    text={repos[1].description}
                    language={repos[1].language}
                ></GitHub>
                </div>
            </div>
            <div className='row gx-1 m-1'>
                <div className='col gx-0 m-1'>
                <GitHub
                    title={repos[2].name}
                    repoUrl={repos[2].html_url}
                    text={repos[2].description}
                    language={repos[2].language}
                ></GitHub>
                </div>
                <div className='col gx-0 m-1'>
                <GitHub
                    title={repos[3].name}
                    repoUrl={repos[3].html_url}
                    text={repos[3].description}
                    language={repos[3].language}
                ></GitHub>
                </div>
            </div>
            </div>
        ) : (
            <div>Loading...</div>
        )}
        </div>
        );
    }
}
 
export default GithubGroup;