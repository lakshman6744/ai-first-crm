from sqlalchemy.orm import Session
from app.models.interaction import Interaction


def log_interaction(
    db: Session,
    hcp_id: int,
    interaction_type: str,
    summary: str,
    follow_up: str,
):
    interaction = Interaction(
        hcp_id=hcp_id,
        interaction_type=interaction_type,
        summary=summary,
        follow_up=follow_up,
    )

    db.add(interaction)
    db.commit()
    db.refresh(interaction)

    return interaction