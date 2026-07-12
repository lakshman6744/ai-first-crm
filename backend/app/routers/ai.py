from fastapi import APIRouter
from pydantic import BaseModel

from app.langgraph.graph import graph

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(request: ChatRequest):

    result = graph.invoke(
        {
            "user_input": request.message,
            "tool": "",
            "result": ""
        }
    )

    return {
        "tool": result["tool"],
        "response": result["result"]
    }