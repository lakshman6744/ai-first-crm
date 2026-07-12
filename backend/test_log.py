from app.models.hcp import HCP
from app.database.database import SessionLocal
from app.tools.log_interaction import log_interaction

db = SessionLocal()

interaction = log_interaction(
    db=db,
    hcp_id=4,
    interaction_type="AI Meeting",
    summary="Discussed new diabetes medicine.",
    follow_up="Next Friday",
)

print("Interaction Saved!")
print("ID:", interaction.id)
print("Summary:", interaction.summary)