# Employee Leave Management System API Documentation

## Authentication APIs

### Register Employee
POST /api/auth/register

Request Body:
```json
{
  "name": "Jasmine",
  "empID": "EMP001",
  "email": "jasmine@gmail.com",
  "department": "CSE",
  "password": "123456",
  "joiningDate": "2026-07-03"
}
```

### Login
POST /api/auth/login

Request Body:
```json
{
  "email": "jasmine@gmail.com",
  "password": "123456"
}
```

---

## Leave APIs

### Apply Leave
POST /api/leaves

Headers:
```
Authorization: Bearer <token>
```

Request Body:
```json
{
  "leaveType": "Sick",
  "startDate": "2026-07-04",
  "endDate": "2026-07-05",
  "reason": "Fever"
}
```

### Get My Leaves
GET /api/leaves

Headers:
```
Authorization: Bearer <token>
```

### Get Pending Leaves
GET /api/leaves/pending

Headers:
```
Authorization: Bearer <token>
```

### Approve Leave
PUT /api/leaves/:id/approve

Headers:
```
Authorization: Bearer <token>
```

### Reject Leave
PUT /api/leaves/:id/reject

Headers:
```
Authorization: Bearer <token>
```

Request Body:
```json
{
  "managerComments": "Rejected due to workload"
}
```