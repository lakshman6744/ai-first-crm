from app.services.groq_service import ask_groq


def choose_tool(user_input: str):

    prompt = f"""
You are an AI CRM Agent.

Choose ONLY ONE tool from this list.

search_hcp
log_interaction
edit_interaction
meeting_summary
followup_generator

User Request:

{user_input}

Return ONLY the tool name.
"""

    return ask_groq(prompt).strip()