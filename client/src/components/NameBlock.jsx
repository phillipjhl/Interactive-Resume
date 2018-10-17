import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import resume from '../docs/Resume.pdf';

import Carousel from './Carousel';


export default function NameBlock(props) {

    return (
        <div className="name-block bg-secondary">
            <div className="name-block-container">
                <h1 className="text-primary"><span>Hi, I'm</span>Phillip Langland</h1>
                <Carousel />
                <a target="_blank" href={resume} className="btn btn-download bg-compliment my-4">
                    Download Resume
                    <FontAwesomeIcon icon={faCloudDownloadAlt} size="lg" />
                </a>
                <ul className="social pl-0 mb-2">
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/phillip-langland" className="btn p-1">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/phillipjhl" className="btn p-1">
                            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/plangland" className="btn p-1">
                            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}