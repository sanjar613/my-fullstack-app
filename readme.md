# Dern-Support: IT Technical Support Platform

Dern-Support is a full-stack web application for managing IT support requests, knowledge base articles, analytics, and customer feedback. It is designed for both individual and business users, with a dedicated admin dashboard for support staff.

## Features

- User registration & authentication (individual, business, admin)
- Submit and track IT support requests
- Request spare parts and on-site support
- Knowledge base with search and tagging
- Admin dashboard with analytics, request management, and feedback review
- Customer feedback and rating system
- Responsive UI with Bootstrap & Tailwind CSS

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT
- **Charts:** Chart.js
- **Build Tools:** Vite, PostCSS
- **Other:** dotenv, bcryptjs, concurrently

## Project Structure

```
.
├── backend/         # Express API, DB models, controllers, routes
├── frontend/        # Static frontend assets (HTML, CSS, JS)
├── src/             # React (Vite) entry point (optional/for future)
├── package.json     # Project scripts and dependencies
├── .env             # Environment variables
└── ...              # Config files
```

## Prerequisites

- Node.js (v16+ recommended)
- npm (v8+)
- MongoDB (local or Atlas)

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure environment variables

Copy `.env` and update values as needed:

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
ADMIN_EMAIL=<admin-email>
ADMIN_PASSWORD=<admin-password>
PORT=5000
NODE_ENV=development
```

### 4. Seed the admin user (optional, for first-time setup)

```sh
npm run server
# In another terminal:
node backend/seeder.js
```

### 5. Start the development servers

```sh
npm run dev
```

- The backend runs on [http://localhost:5000](http://localhost:5000)
- The frontend runs on [http://localhost:5173](http://localhost:5173) (or as shown in terminal)

### 6. Access the Application

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Register as a user or login as admin (see `.env` for credentials).

## Scripts

- `npm run dev` — Start both backend and frontend in development mode
- `npm run server` — Start backend API only (with nodemon)
- `npm run client` — Start frontend only
- `npm run build` — Build frontend for production
- `npm run preview` — Preview production build

## Folder Details

- [`backend/`](backend/) — Express API, models, controllers, routes, seeders
- [`frontend/`](frontend/) — HTML, CSS, JS pages and components
- [`src/`](src/) — React entry (optional/future use)

## Customization

- Update branding, colors, and content in [`frontend/css/styles.css`](frontend/css/styles.css) and HTML files.
- Add new API endpoints or modify models in [`backend/`](backend/).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) (add a LICENSE file if needed)

---

**Dern-Support** — Your trusted IT technical support partner.