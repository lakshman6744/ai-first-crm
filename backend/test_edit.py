from app.models.hcp import HCP
from app.models.interaction import Interaction

from app.database.database import SessionLocal
from app.tools.edit_interaction import edit_interaction

db = SessionLocal()

updated = edit_interaction(
    db=db,
    interaction_id=2,
    summary="Updated AI meeting summary.",
    follow_up="Next Wednesday",
)

if updated:
    print("Updated Successfully")
    print(updated.summary)
    print(updated.follow_up)
else:
    print("Interaction not found")