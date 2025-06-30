import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchGitHubProjects = async (username = 'shaikhanass123') => {
    try {
        const response = await axios.get(`${API_URL}/github/repos`, {
            params: { username }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        throw error;
    }
};