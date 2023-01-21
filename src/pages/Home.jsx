import React from 'react'
import { NavLink } from 'react-router-dom';
import CV from '../components/cv.pdf';
import image from '../svgs/livestreaming.svg';
import image_c from '../svgs/c++.svg';
import image_androidStudio from '../svgs/androidstudio.svg';

export default function Home() {
    return (
        <>

          
               
                {/* Main */}
                <div id="main">
                    <header className="major container medium">
                        <h2>
                            I conduct code experiments that
                            <br />
                            may or may not seriously
                            <br />
                            break the universe
                        </h2>
                        {/*
					<p>Tellus erat mauris ipsum fermentum<br />
					etiam vivamus nunc nibh morbi.</p>
					*/}
                    </header>
                    <div className="box alt container">
                        <section className="feature left">
                            <a to="#" className="image icon solid fa-signal">
                                <img src={image} style={{ height: 53, width: 36 }} alt="" />
                            </a>
                            <div className="content">
                                <h3>Video Encoding</h3>
                                <p>
                                Live VOD streaming to different platforms (web, android).

                                </p>
                            </div>
                        </section>
                        <section className="feature right">
                            <a to="#" className="image icon solid fa-code">
                                <img src={image_c} style={{ height: 53, width: 36 }} alt="" />
                            </a>
                            <div className="content">
                                <h3>React Js</h3>
                                <p>
                                    Can turn your Html5 site into responsive React Application.
                                </p>
                            </div>
                        </section>
                        <section className="feature left">
                            <a to="#" className="image icon solid fa-mobile-alt">
                                <img src={image_androidStudio} style={{ height: 53, width: 36 }} alt="" />
                            </a>
                            <div className="content">
                                <h3>Mobile Application </h3>
                                <p>
                                    successfully worked on more then 10+ projects.
                                </p>
                            </div>
                        </section>
                    </div>
                   
                    <footer className="major container medium">
                        <h3>About</h3>
                        <p>
                            You know what you're looking for and you just found it
                        </p>
                        <ul className="actions special">
                            <li>
                                <a to={CV} className="button">
                                    Ask to join your crew
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
                
            </>

    )
}
