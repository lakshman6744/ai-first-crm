from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.database.database import Base, engine
from app.models.hcp import HCP
from app.routers.hcp import router as hcp_router
from app.models.interaction import Interaction
from app.routers.interaction import router as interaction_router
from app.routers.ai import router as ai_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI-First CRM API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(hcp_router)
app.include_router(interaction_router)
app.include_router(ai_router)

@app.get("/")
def root():
    return {"message": "AI-First CRM Backend is Running 🚀"}