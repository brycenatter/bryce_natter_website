import React from "react";
import TimeLine from './components/timeline';
import About from './components/about';
import GitHub from './components/github';
import GithubGroup from './components/githubGroup';
 
const Home = () => {
    return (
        <React.Fragment>
            <About></About>
            <hr></hr>
            <h2 className="max-w-container-2 center-text">GitHub</h2>
            
            <TimeLine></TimeLine>
            <h2 className="max-w-container-2">GitHub</h2>
            <GithubGroup></GithubGroup>
            
        </React.Fragment>
    );
};
 
export default Home;