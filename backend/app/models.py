from pydantic import BaseModel
from typing import List, Optional

class Project(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    html_url: str
    language: Optional[str] = None
    created_at: str
    updated_at: str

class User(BaseModel):
    login: str
    id: int
    avatar_url: str
    html_url: str
    projects: List[Project] = []