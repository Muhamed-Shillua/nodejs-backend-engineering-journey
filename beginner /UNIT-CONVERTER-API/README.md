# Unit Converter API

- **Tier:** Beginner
- **Type:** REST API (Backend)
- **Status:** In Progress

---

## 1. Project Overview

The **Unit Converter API** is a lightweight backend system built using **vanilla Node.js (no frameworks)** that handles unit conversions for:

- Length
- Weight
- Temperature
- Time (extended module)

The goal is to build a **production-style backend without frameworks like Express**, to deeply understand how servers work internally.

---

## 2. Project Structure

```
UNIT-CONVERTER-API/
│
├── src/
│
│   ├── config/
│   │   └── units.config.js          # Central source of truth for all units
│
│   ├── controllers/
│   │   └── converter.controller.js  # Handles request/response logic
│
│   ├── routes/
│   │   └── converter.routes.js      # API routing layer
│
│   ├── services/
│   │   ├── converter.service.js     # Main orchestration layer
│   │   ├── length.service.js        # Length conversion logic
│   │   ├── weight.service.js        # Weight conversion logic
│   │   ├── temperature.service.js   # Temperature conversion logic
│   │   └── time.service.js          # Time conversion logic
│
│   ├── utils/
│   │   ├── response.utils.js        # HTTP response helpers
│   │   ├── request.utils.js         # Request parsing utilities
│   │   └── validation.utils.js      # Input validation layer
│
│   ├── middlewares/
│   │   └── error.middleware.js      # Global error handling
│
│   ├── app.js                       # App core (routing entry)
│   └── server.js                    # Server bootstrap
│
├── .env                             # Environment variables
├── .gitignore                       # Ignored files
├── package.json                     # Project metadata & scripts
└── README.md
```

---

## 3. Features

### Core Features

- Convert between multiple unit types:
  - Length (m, km, inch, ft...)
  - Weight (kg, lb, g...)
  - Temperature (C, F, K)
  - Time (sec, min, hour...)

- REST API endpoints:
  - `GET /api/converters` → supported units
  - `POST /api/convertit` → perform conversion

- Dynamic unit system (config-driven)

---

## 4. Architecture Overview

This project follows a **clean MVC + Service Architecture (backend-style)**

---

### 1. Config Layer (`config/`)

- `units.config.js`
- Defines all supported units
- Acts as single source of truth

---

### 2. Controller Layer (`controllers/`)

- `converter.controller.js`
- Handles HTTP requests/responses
- Calls service layer only
- No business logic inside

---

### 3. Service Layer (`services/`)

Responsible for all **business logic**

- `converter.service.js` → orchestrates conversion flow
- `length.service.js` → length formulas
- `weight.service.js` → weight formulas
- `temperature.service.js` → non-linear conversion logic
- `time.service.js` → time calculations

---

### 4. Routes Layer (`routes/`)

- `converter.routes.js`
- Handles endpoint mapping
- Keeps app modular and scalable

---

### 5. Utils Layer (`utils/`)

- `http.utils.js` → response formatter
- `request.utils.js` → request parser
- `validation.utils.js` → input validation

---

### 6. Middleware Layer (`middlewares/`)

- `error.middleware.js`
- Centralized error handling system
- Prevents crashing server

---

## 5. Data Flow

```
Client Request
    ↓
Routes Layer
    ↓
Controller Layer
    ↓
Validation Layer
    ↓
Service Layer
    ↓
Domain Logic (math conversions)
    ↓
Response Utility
    ↓
Client Response
```

---

## 6. Validation System (IMPORTANT)

Validation happens in:

```
src/utils/validation.utils.js
```

Responsible for:

- Checking required fields (type, value, from, to)
- Preventing invalid unit types
- Ensuring numeric values
- Blocking unsupported conversions
- Returning structured error messages

---

## 7. Error Handling Strategy

- Centralized error middleware
- Consistent API response format:

```json
{
  "success": false,
  "message": "Invalid input"
}
```

---

## 8. API Response Format

### Success

```json
{
  "success": true,
  "data": {
    "input": { ... },
    "result": 500
  }
}
```

### Error

```json
{
  "success": false,
  "message": "Description of error"
}
```

---

## 9. How to Run

```bash
npm install
```

```bash
npm run dev
```

Server runs on:

```
http://localhost:5005
```

---

## 10. Technical Highlights

- Pure Node.js HTTP server (no frameworks)
- MVC + Service layered architecture
- Fully modular design
- Centralized validation system
- Scalable for enterprise-level expansion
- Clean separation of concerns
- Production-style API structure
