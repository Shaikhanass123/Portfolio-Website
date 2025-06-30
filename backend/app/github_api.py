from fastapi import APIRouter
import httpx
from typing import List, Dict

router = APIRouter()

GITHUB_API_URL = "https://api.github.com/users/shaikhanass123"

@router.get("/github/repos", response_model=List[Dict])
async def get_user_repositories(username: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.github.com/users/{username}/repos")
        response.raise_for_status()
        return response.json()