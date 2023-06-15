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
                    <div className="col-sm">
                        <ul>
                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -890 960 960" width="30">
                            <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
                            </svg>
                            bryce@bnatter.com
                            </li>

                            <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 24 30"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                           <a target="_blank" href="https://www.linkedin.com/in/bryce-natter-4b5a76150/">LinkedIn</a>
                            </li>

                            <li>
                            <svg width="30" height="20" viewBox="0 0 24 30" xmlns="http://www.w3.org/2000/svg"><path transform="scale(0.25)" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                            <a target="_blank" href="https://github.com/brycenatter/">GitHub</a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-sm">
                        <img className="normImg border border-0 rounded-5" src={require("./images/IMG_8983.jpg")} alt="Bryce on top of mountain"/>
                    </div>

                </div>

                <h2 className="mt-4">Academic and Professional</h2>

                <h5>Current Projects and GitHub</h5>
                <p>
                    I'm currently working on a project that deals with USA cycling results data. It has a React front end, with a back end written in Python and C++. Once it's released, it will provide insights into your top competitors and other metrics that will allow for comparison of race-difficulty across many competitions in the US.
                    
                    If you'd like to see some of my past projects check out my <a target="_blank" id="githubSocialLink" href="https://github.com/brycenatter">GitHub</a>. Below are my four most recently-updated repos. 
                </p>
                <GithubGroup></GithubGroup>

                <h5>University of Michigan</h5>
                <p>
                    I am about to start my second year at the University of Michigan College of Engineering. Having come into University with transfer credit, I was able to complete the mandatory Data Structures and Algorithms (EECS 280 & 281) two semesters early. This has allowed me to start taking more specialized upper-level CS electives starting my first semester sophomore year.
                </p>
                

                
                

                <h2>Personal</h2>
                <h5>Bissell-ABG Cycling</h5>
                <div className="row">
                    <div className="col">
                        <img className="normImg border border-0 rounded-5" src={require("./images/IMG_4956.JPG")} alt="Bryce on top of mountain"/>
                    </div>
                    <div className="col">
                    Starting in 2023, I have joined the Bissell-ABG cycling team. Throughout the season I will be competing in some of the biggest gravel races in the US. 
                    </div>
                </div>
                
                <h5 className="mt-3">Michigan Cycling</h5>
                <div className="row">
                    <div className="col">
                    I just finished my first season with the University of Michigan cycling team where I won the MWCCC conference. I am also the VP of social media (<a target="_blank" href="https://www.instagram.com/michigancycling/">@michigancycling</a>) and home race director for the team. 
                    </div>
                    <div className="col">
                        <img className="normImg border border-0 rounded-5" src={require("./images/IMG_6660.JPG")} alt="Bryce on top of mountain"/>
                    </div>
                </div>






                
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