# Portfolio Website

This project is a portfolio website built using React for the frontend and FastAPI for the backend. It showcases GitHub projects and includes an "About Me" section. The website features a blue crystal color scheme and incorporates animations for an enhanced user experience.

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built with React and includes the following components:

- **AboutMe.tsx**: Displays the "About Me" section.
- **ProjectList.tsx**: Fetches and displays a list of GitHub projects.
- **ProjectCard.tsx**: Represents an individual project card.
- **AnimatedSection.tsx**: Adds animations to sections of the website.

The frontend also includes a CSS file for styling and an HTML file as the entry point.

### Backend

The backend is built with FastAPI and includes:

- **main.py**: The entry point of the FastAPI application, setting up routes for the API.
- **github_api.py**: Functions to interact with the GitHub API.
- **models.py**: Defines data models for the application.

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the FastAPI application:
   ```
   uvicorn app.main:app --reload
   ```

## Usage

Once both the frontend and backend are running, you can access the portfolio website in your browser. The frontend will fetch data from the backend to display your GitHub projects and personal information.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.