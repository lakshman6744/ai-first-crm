from app.services.groq_service import ask_groq


def meeting_summary(notes: str):
    prompt = f"""
You are a pharmaceutical CRM assistant.

Summarize the following doctor meeting professionally.

Meeting Notes:
{notes}

Return only the summary.
"""

    return ask_groq(prompt)