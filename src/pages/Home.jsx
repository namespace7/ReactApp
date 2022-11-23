import React from 'react'
import { NavLink } from 'react-router-dom';
import CV from '../components/cv.pdf'

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
                                <img src="assets/images/pic01.jpg" alt="" />
                            </a>
                            <div className="content">
                                <h3>Video Encoding</h3>
                                <p>
                                    live VOD streaming encoding & decording to different platform.
                                </p>
                            </div>
                        </section>
                        <section className="feature right">
                            <a to="#" className="image icon solid fa-code">
                                <img src="assets/images/pic02.jpg" alt="" />
                            </a>
                            <div className="content">
                                <h3>C++</h3>
                                <p>
                                    can turn your html5 site into responsive React Application.
                                </p>
                            </div>
                        </section>
                        <section className="feature left">
                            <a to="#" className="image icon solid fa-mobile-alt">
                                <img src="assets/images/pic03.jpg" alt="" />
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
                            Download CV
                        </p>
                        <ul className="actions special">
                            <li>
                                <a to={CV} className="button">
                                    Join our crew
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
                
            </>

    )
}
