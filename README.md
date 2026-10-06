# Smart Inventory & Warehouse Management System

A full-stack warehouse inventory application built with **ReactJS + Node.js/Express + SQLite**.

## Features
- Admin, Warehouse Manager and Staff roles
- Product CRUD and category/stock filtering
- Stock IN / OUT with server-side validation
- Negative stock prevention
- Complete stock movement history
- Suppliers and purchase orders
- Warehouse location tracking
- Dashboard KPIs and low-stock alerts
- Inventory reports with CSV export
- Audit logs
- Responsive UI
- SQLite as the single source of truth
- Demo authentication with JWT

## Demo credentials
- Admin: `admin@inventory.com` / `Admin@123`
- Manager: `manager@inventory.com` / `Manager@123`
- Staff: `staff@inventory.com` / `Staff@123`

## Local setup
Requirements: Node.js 18+.

```bash
npm install
npm run install:all
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:5000

The SQLite database is created automatically and seeded on first backend start.

## Backend commands
```bash
cd backend
npm install
npm start
```

## Frontend commands
```bash
cd frontend
npm install
npm run dev
```

## API summary
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Login |
| GET | `/api/products` | List/filter products |
| POST | `/api/products` | Add product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| POST | `/api/stock/in` | Add stock |
| POST | `/api/stock/out` | Remove stock |
| GET | `/api/stock/movements` | Movement history |
| GET/POST | `/api/suppliers` | Suppliers |
| GET/POST | `/api/warehouses` | Warehouses |
| GET | `/api/dashboard/summary` | Dashboard analytics |
| GET | `/api/reports/inventory` | Inventory report |
| GET/POST | `/api/purchase-orders` | Purchase orders |

## Deployment
### Backend
Deploy `backend` to Render/Railway/etc. Set:
- `PORT`
- `JWT_SECRET`
- `FRONTEND_URL`

SQLite is persisted locally by default. For hosted environments, use a persistent disk/volume so the `.sqlite` database survives restarts.

### Frontend
Deploy `frontend` to Vercel/Netlify. Set:
- `VITE_API_URL=https://YOUR-BACKEND/api`

## Submission checklist
- GitHub repository URL
- Deployed frontend URL
- 5–8 minute demo video
- README with setup, credentials, API summary and screenshots


## Troubleshooting blank pages
If a page cannot reach the API, the application now shows an inline error with a retry option instead of a blank screen. Make sure both the Express backend and Vite frontend are running with `npm run dev`.
