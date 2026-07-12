from app.tools.meeting_summary import meeting_summary

notes = """
Visited Dr. Ramesh at Apollo Hospital.
Discussed CardioPlus.
Doctor requested a product brochure.
Follow-up next Monday.
"""

summary = meeting_summary(notes)

print(summary)