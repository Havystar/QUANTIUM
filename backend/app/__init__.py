from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .quantum import quantum_router

app = FastAPI()

app.include_router(quantum_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

