from app.services.groq_service import ask_groq

response = ask_groq(
    "Say hello and explain what an AI CRM is in one sentence."
)

print(response)