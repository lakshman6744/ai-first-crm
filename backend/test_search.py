from app.database.database import SessionLocal
from app.tools.search_hcp import search_hcp

db = SessionLocal()

results = search_hcp(db, "Hyderabad")

print("Doctors Found:\n")

for doctor in results:
    print(
        doctor.id,
        doctor.name,
        doctor.specialization,
        doctor.hospital,
        doctor.city,
    )