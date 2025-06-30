import React from 'react';

interface ProjectCardProps {
    title: string;
    url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, url }) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;