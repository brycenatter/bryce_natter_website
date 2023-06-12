import React from "react";
import TimeLine from './components/timeline';
import About from './components/about';
import GitHub from './components/github';
import GithubGroup from './components/githubGroup';
 
const Home = () => {
    return (
        <React.Fragment>
            <div className="max-w-container-2">
                <About></About>
                <hr></hr>
                <h2>About</h2>
                <div className="max-w-container-2 row">
                    <div className="col">
                        Testing
                    </div>
                    <div className="col">
                        <img className="normImg border border-0 rounded-5" src={require("./images/IMG_8983.jpg")} alt="Bryce on top of mountain"/>
                    </div>

                </div>
                
                <h2>Academic and Professional</h2>
                <h5>2024 Summer Intership</h5>
                <p>
                    I am in the search for a 2024 summer internship in a CS-related field. If you know of any opportunities or know someone who might, please feel free to reach out.
                </p>

                <h5>School</h5>
                <p>
                    I am about to start my second year at the University of Michigan College of Engineering. Having come into University with transfer credit, I was able to complete the mandatory Data Structures and Algorithms (EECS 280 & 281) two semesters early. This has allowed me to start taking more specialized upper-level CS electives starting my first semester sophomore year.
                </p>
                <h5>Current Projects and GitHub</h5>
                <p>
                    I'm currently working on a project that deals with USA cycling results data. It has a React front end, with a back end written in Python and C++. Once it's released, it will provide insights into your top competitors and other metrics that will allow for comparison of race-difficulty across many competitions in the US.
                    
                    If you'd like to see my past, public projects check out my <a target="_blank" id="githubSocialLink" href="https://github.com/brycenatter">GitHub</a>. Below are my four most recently-updated repos. You can even see the React source code for this very website!
                </p>
                <GithubGroup></GithubGroup>

                <h2>Personal</h2>
                <h5>Bissell-ABG Cycling</h5>
                <p></p>



                <h2>Updates</h2>
                <TimeLine></TimeLine>

                <div className="bottomBar text-center row ">
                <div className="col">
                <a target="_blank" href="https://www.instagram.com/brycenatter/" className="bottomBarLink" id="instagramLink">Instagram</a>
                </div>
                
                <div className="col">
                <a target="_blank" id="facebookLink" href="https://www.facebook.com/profile.php?id=100015233418071" className="bottomBarLink">Facebook</a>
                </div>

                <div className="col">
                <a target="_blank" id="mastodonLink" href="https://mastodon.social/@Natter" className="bottomBarLink">Mastodon</a>
                </div>

                <div className="col">
                <a target="_blank" id="githubSocialLink" href="https://github.com/brycenatter" className="bottomBarLink">GitHub</a>
                </div>

                <div className="col">
                <a target="_blank" id="stravaLink" href="https://www.strava.com/athletes/23737779" className="bottomBarLink">Strava</a>
                </div>

                <div className="col">
                <a target="_blank" id="linkedinLink" href=" https://www.linkedin.com/in/bryce-natter-4b5a76150/" className="bottomBarLink">LinkedIn</a>
                </div>
            </div>
                
            </div>



            
        </React.Fragment>
    );
};
 
export default Home;