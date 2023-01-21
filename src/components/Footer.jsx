import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsStackOverflow } from 'react-icons/bs'
import {FaSteam} from 'react-icons/fa'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <div id="footer">
                <div className="container medium">
                    <header className="major last">
                        <h2>Questions or comments?</h2>
                    </header>

                    <ul className="icons">
                        <li>
                            <a href='https://www.linkedin.com/in/yashwant-kumar-singh-00b20b83/' target="_blank"><BsLinkedin /></a>
                        </li>
                        <li>
                            <a href='https://github.com/namespace7' target="_blank"><FaGithub /></a>
                        </li>
                        <li>
                            <a href='https://stackoverflow.com/users/9603922/space' target="_blank"><BsStackOverflow /></a>
                        </li>
                        <li>
                            <a href='https://s.team/y22/ggfvvdgv?l=english' target="_blank"><FaSteam /></a>
                        </li>
                        
                    </ul>
                    <ul className="copyright">
                        <li>© namespace7. All rights reserved.</li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
