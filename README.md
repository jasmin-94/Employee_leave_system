# Employee Leave Management System

## Features
- Employee Login
- Apply Leave
- View Leave History
- Manager Login
- View Pending Requests
- Approve/Reject Leave Requests

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express.js
- Database: MongoDB Atlas
- Authentication: JWT

## Project Structure
Employee_leave_system/
├── backend/
├── frontend/
└── README.md

## Setup Instructions

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm run dev

## API Endpoints

POST /api/auth/register
POST /api/auth/login
POST /api/leaves
GET /api/leaves
GET /api/leaves/pending
PUT /api/leaves/:id/approve
PUT /api/leaves/:id/reject