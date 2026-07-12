from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.database import Base


class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)
    hcp_id = Column(Integer, ForeignKey("hcps.id"))

    interaction_type = Column(String(100))
    summary = Column(String(1000))
    follow_up = Column(String(500))

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    hcp = relationship("HCP")