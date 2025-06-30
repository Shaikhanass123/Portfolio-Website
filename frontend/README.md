# Frontend Portfolio Website

This is the frontend part of the portfolio website built using React. It showcases various GitHub projects and includes an "About Me" section. The application features a blue crystal color scheme and incorporates animations for a better user experience.

## Getting Started

To get started with the frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd portfolio-website/frontend
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```
   npm install
   ```

3. **Run the application**:
   Start the development server with:
   ```
   npm start
   ```
   This will open the application in your default web browser at `http://localhost:3000`.

## Project Structure

- **public/index.html**: The main HTML file for the React application.
- **src/components**: Contains all the React components:
  - `AboutMe.tsx`: Displays the "About Me" section.
  - `ProjectList.tsx`: Fetches and displays a list of GitHub projects.
  - `ProjectCard.tsx`: Represents an individual project card.
  - `AnimatedSection.tsx`: Adds animations to sections of the website.
- **src/styles/theme.css**: Contains the CSS styles for the application.
- **src/App.tsx**: The main component that sets up routing and layout.
- **src/index.tsx**: The entry point for the React application.
- **src/api/github.ts**: Contains functions to call the backend API.

## Technologies Used

- React
- TypeScript
- CSS
- FastAPI (for the backend)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.