# Portfolio Website Backend

This is the backend component of the portfolio website, built using FastAPI. It serves as the API to fetch GitHub projects and user information.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website/backend
   ```

2. **Create a Virtual Environment**
   It is recommended to create a virtual environment to manage dependencies.
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install Dependencies**
   Install the required packages using pip.
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   Start the FastAPI application.
   ```bash
   uvicorn app.main:app --reload
   ```

5. **Access the API**
   The API will be available at `http://127.0.0.1:8000`. You can access the interactive API documentation at `http://127.0.0.1:8000/docs`.

## API Endpoints

- **GET /api/projects**
  - Fetches a list of GitHub projects for the user.

- **GET /api/about**
  - Fetches the "About Me" information.

## Project Structure

- `app/main.py`: Entry point of the FastAPI application.
- `app/github_api.py`: Functions to interact with the GitHub API.
- `app/models.py`: Data models for the application.
- `requirements.txt`: List of dependencies.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.