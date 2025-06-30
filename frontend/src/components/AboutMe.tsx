import React from 'react';
import './AboutMe.css';
import profilePic from '../assets/profile.jpg'; // apni image ka path sahi karein

const AboutMe: React.FC = () => {
    return (
        <div className="about-me-flex">
            <div className="about-me-text">
    <p>
        Hello! I'm a passionate developer with a love for creating dynamic and responsive web applications.
        I enjoy working with modern technologies and continuously learning new skills to enhance my craft.
    </p>
    <p>
        My journey in programming started with a fascination for problem-solving and has evolved into a career where I can express my creativity through code.
        I specialize in frontend development, particularly using React, and I have experience with backend technologies as well.
    </p>
    <p>
        In my spare time, I contribute to open-source projects and work on personal projects to further develop my skills.
        I believe in the power of collaboration and community in the tech world.
    </p>
    <p>
        I have worked on several challenging projects, ranging from portfolio websites to full-stack applications.
        My goal is to keep improving and to help others in the developer community.
    </p>
    <p>
        Feel free to check out my GitHub projects to see what I've been working on!
    </p>
</div>
            <img src={profilePic} alt="Profile" className="about-me-pic" />
        </div>
    );
};

export default AboutMe;