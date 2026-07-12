from app.services.groq_service import ask_groq


def generate_followup(doctor_name: str, discussion: str):
    prompt = f"""
You are a pharmaceutical sales assistant.

Write a professional follow-up email after a doctor's meeting.

Doctor:
{doctor_name}

Discussion:
{discussion}

Keep it short, professional, and polite.
"""

    return ask_groq(prompt)