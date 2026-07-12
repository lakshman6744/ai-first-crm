from pydantic import BaseModel


class HCPCreate(BaseModel):
    name: str
    specialization: str | None = None
    hospital: str | None = None
    city: str | None = None
    email: str | None = None
    phone: str | None = None


class HCPResponse(HCPCreate):
    id: int

    class Config:
        from_attributes = True