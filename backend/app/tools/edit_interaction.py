from sqlalchemy.orm import Session
from app.models.interaction import Interaction


def edit_interaction(
    db: Session,
    interaction_id: int,
    summary: str,
    follow_up: str,
):
    interaction = (
        db.query(Interaction)
        .filter(Interaction.id == interaction_id)
        .first()
    )

    if not interaction:
        return None

    interaction.summary = summary
    interaction.follow_up = follow_up

    db.commit()
    db.refresh(interaction)

    return interaction