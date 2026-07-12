# 🤖 AI-First CRM – HCP Module

## 📌 Project Overview

AI-First CRM is a Healthcare Professional (HCP) Customer Relationship Management system built for pharmaceutical sales representatives. The application enables users to manage HCP information, log interactions, and use AI-powered tools to improve productivity.

This project was developed as part of the AI-First CRM Assignment using **React**, **FastAPI**, **LangGraph**, **Groq LLM**, and **PostgreSQL**.

---

# 🚀 Features

### ✅ Dashboard
- Displays CRM overview
- Easy navigation to all modules

### ✅ HCP Management
- Add Healthcare Professionals
- View all HCPs
- Store data in PostgreSQL

### ✅ Log Interaction
- Record doctor interactions
- Save interaction type
- Store meeting summary
- Add follow-up details

### ✅ Interaction History
- View previously logged interactions
- Track follow-up activities

### ✅ AI Chat Assistant
Supports multiple AI-powered tools through LangGraph.

---

# 🤖 LangGraph Tools

The AI Agent uses LangGraph to route user requests to the appropriate tool.

### 1. Search HCP
Search Healthcare Professionals stored in the database.

### 2. Log Interaction
Automatically logs doctor interactions into the CRM.

### 3. Edit Interaction
Updates existing interaction records.

### 4. Meeting Summary
Generates concise summaries of doctor meetings.

### 5. Follow-up Generator
Creates professional follow-up messages for Healthcare Professionals.

---

# 🛠 Tech Stack

## Frontend
- React
- Axios
- React Router
- CSS

## Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

## AI
- LangGraph
- Groq LLM
- Gemma2-9B-IT

## Database
- PostgreSQL (Neon)

---

# 📂 Project Structure

```
ai-first-crm
│
├── backend
│   ├── app
│   │   ├── database
│   │   ├── langgraph
│   │   ├── models
│   │   ├── routers
│   │   ├── schemas
│   │   ├── services
│   │   └── tools
│   │
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/lakshman6744/ai-first-crm.git
```

```
cd ai-first-crm
```

---

# Backend Setup

```
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Create `.env`

```env
DATABASE_URL=your_postgresql_database_url
GROQ_API_KEY=your_groq_api_key
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger API

```
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

```
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# API Endpoints

## HCP

```
GET /hcp/
POST /hcp/
```

## Interaction

```
GET /interaction/
POST /interaction/
```

## AI

```
POST /ai/chat
```

---

# Database

The project uses PostgreSQL hosted on Neon.

Tables

- hcps
- interactions

---

# LangGraph Workflow

```
User
   │
   ▼
React Frontend
   │
   ▼
FastAPI Backend
   │
   ▼
LangGraph Router
   │
   ▼
Select Tool
   │
   ├── Search HCP
   ├── Log Interaction
   ├── Edit Interaction
   ├── Meeting Summary
   └── Follow-up Generator
   │
   ▼
Groq LLM / PostgreSQL
   │
   ▼
Response
```

---

# Screenshots

Dashboard

- AI CRM Dashboard

HCP List

- List of Healthcare Professionals

Log Interaction

- Log doctor interactions

History

- View previous interactions

AI Chat

- LangGraph-powered AI assistant

---

# Future Improvements

- User Authentication
- JWT Security
- Role-based Access Control
- File Upload
- AI Analytics Dashboard
- Email Notifications
- Docker Deployment
- Cloud Deployment

---

# Developed By

**Lakshman**

GitHub

https://github.com/lakshman6744

---

# Assignment

AI-First CRM HCP Module

React + FastAPI + LangGraph + Groq + PostgreSQL
s
