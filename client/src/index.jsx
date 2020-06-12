import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import VideoSection from './components/VideoSection.jsx';


ReactDOM.render(<Navbar />, document.getElementById('navbar'));

ReactDOM.render(<VideoSection />, document.getElementById('videoSection'));


//https://stackabuse.com/deploying-node-js-apps-to-aws-ec2-with-docker/