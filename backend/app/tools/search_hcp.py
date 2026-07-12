from sqlalchemy.orm import Session
from app.models.hcp import HCP


def search_hcp(db: Session, keyword: str):
    keyword = f"%{keyword}%"

    return (
        db.query(HCP)
        .filter(
            (HCP.name.ilike(keyword))
            | (HCP.specialization.ilike(keyword))
            | (HCP.city.ilike(keyword))
            | (HCP.hospital.ilike(keyword))
        )
        .all()
    )