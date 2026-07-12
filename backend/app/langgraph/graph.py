from typing import TypedDict

from langgraph.graph import StateGraph, END

from app.langgraph.agent import choose_tool
from app.database.database import SessionLocal

from app.tools.search_hcp import search_hcp
from app.tools.log_interaction import log_interaction
from app.tools.edit_interaction import edit_interaction
from app.tools.meeting_summary import meeting_summary
from app.tools.followup_generator import generate_followup


class AgentState(TypedDict):
    user_input: str
    tool: str
    result: str


def router(state: AgentState):

    tool = choose_tool(state["user_input"])

    state["tool"] = tool

    return state


def execute(state: AgentState):

    db = SessionLocal()

    tool = state["tool"]
    text = state["user_input"]

    if tool == "meeting_summary":

        state["result"] = meeting_summary(text)

    elif tool == "followup_generator":

        state["result"] = generate_followup(
            "Doctor",
            text
        )

    elif tool == "search_hcp":

        doctors = search_hcp(db, "Hyderabad")

        state["result"] = "\n".join(
            [
                f"{d.name} - {d.specialization}"
                for d in doctors
            ]
        )

    elif tool == "log_interaction":

        interaction = log_interaction(
            db=db,
            hcp_id=4,
            interaction_type="AI Chat",
            summary=text,
            follow_up="Next Week",
        )

        state["result"] = (
            f"Interaction saved successfully. ID = {interaction.id}"
        )

    elif tool == "edit_interaction":

        interaction = edit_interaction(
            db=db,
            interaction_id=2,
            summary=text,
            follow_up="Updated",
        )

        if interaction:
            state["result"] = "Interaction updated."
        else:
            state["result"] = "Interaction not found."

    db.close()

    return state


builder = StateGraph(AgentState)

builder.add_node("router", router)
builder.add_node("execute", execute)

builder.set_entry_point("router")

builder.add_edge("router", "execute")
builder.add_edge("execute", END)

graph = builder.compile()