# Tasks Manager - Interview Prep

Minimal Tasks Manager application with Node.js (TypeScript + Express) backend and Angular (standalone) frontend.

## Quick Start

### Backend
```bash
cd server
npm install
npm run dev
```
Server runs on `http://localhost:3000`

### Frontend
```bash
cd client
npm install
ng serve
```
App runs on `http://localhost:4200`

## API Endpoints

- `GET /health` - Health check
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create task (body: `{ title: string }`)

## Project Structure

```
server/src/
  ├── index.ts          # Express setup
  ├── routes/           # URL routing
  ├── controllers/      # Request handling
  ├── services/         # Business logic
  └── types/            # TypeScript types

client/src/app/
  ├── tasks/
  │   ├── tasks.service.ts
  │   └── tasks-list/   # Component
  └── types/
```

## Key Points for Interview

**Backend:** Routes → Controllers → Services pattern. In-memory storage (swap for DB in production).

**Frontend:** Standalone components, service layer for API calls, loading/error states.

**Extensions:** Toggle completion, delete task, filtering, task editing.
