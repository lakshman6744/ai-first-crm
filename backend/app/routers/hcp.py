from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.hcp import HCP
from app.schemas.hcp import HCPCreate, HCPResponse

router = APIRouter(prefix="/hcp", tags=["HCP"])


@router.post("/", response_model=HCPResponse)
def create_hcp(hcp: HCPCreate, db: Session = Depends(get_db)):
    new_hcp = HCP(**hcp.model_dump())
    db.add(new_hcp)
    db.commit()
    db.refresh(new_hcp)
    return new_hcp


@router.get("/")
def get_all_hcps(db: Session = Depends(get_db)):
    return db.query(HCP).all()