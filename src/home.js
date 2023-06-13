import React from "react";
import TimeLine from './components/timeline';
import About from './components/about';
import GitHub from './components/github';
import GithubGroup from './components/githubGroup';
import ReactLogo from './logo.svg';
 
const Home = () => {
    return (
        <React.Fragment>
            <div className="max-w-container-2">
                <About></About>
                <hr></hr>
                <h2>Contact</h2>
                
                <div className="row">
                    <div className="col ">
                        <ul>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -890 960 960" width="30">
                            <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
                            </svg>
                            bryce@bnatter.com
                            </li>

                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 30"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            Bryce Natter
                            </li>
                        </ul>
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
                <div className="row">
                    <div className="col">
                        <img className="normImg border border-0 rounded-5" src={require("./images/IMG_4956.JPG")} alt="Bryce on top of mountain"/>
                    </div>
                    <div className="col">
                        Testing
                    </div>
                </div>

                <h5>Michigan Cycling</h5>
                
                <div className="row">
                    <div className="col">
                        Testing
                    </div>
                    <div className="col">
                        <img className="normImg border border-0 rounded-5" src={require("./images/IMG_6660.JPG")} alt="Bryce on top of mountain"/>
                    </div>
                </div>


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