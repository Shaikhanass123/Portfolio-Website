from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .github_api import router as github_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(github_router, prefix="/api")