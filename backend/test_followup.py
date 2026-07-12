from app.tools.followup_generator import generate_followup

response = generate_followup(
    "Dr. Ramesh",
    "Discussed CardioPlus. Doctor requested a brochure and a product demo."
)

print(response)