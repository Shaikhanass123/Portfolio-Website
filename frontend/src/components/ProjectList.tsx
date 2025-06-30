import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { fetchGitHubProjects } from '../api/github';
import './ProjectList.css';

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await fetchGitHubProjects();
                setProjects(data);
            } catch (err) {
                setError('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        getProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="project-list">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.name}
                    url={project.html_url}
                />
            ))}
        </div>
    );
};

export default ProjectList;