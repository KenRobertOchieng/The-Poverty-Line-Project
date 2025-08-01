# Poverty Line Frontend

  A React/Vite single-page app that interacts with the Poverty Line back-end API to display dashboards, manage users, and track income records.

# Tech Stack

  Vite + React
  Redux Toolkit for state management
  React Router for client-side routing
  Tailwind CSS (or your chosen styling library)
  React DevTools for debugging

# Quickstart

  Clone & install
  git clone https://github.com/KenRobertOchieng/The-Poverty-Line-Project.git
  cd The-Poverty-Line-Project/client
  npm install


# Configure API URL

  In the root of /client, create a .env file:

VITE_API_BASE_URL=https://the-poverty-line-project-<your-id>.onrender.com
(This will be referenced as import.meta.env.VITE_API_BASE_URL in your code.)

# Run in development

  npm run dev
  Open http://localhost:5173 to view your app.

# Build for production

  npm run build
  Deploy the /dist folder to your hosting provider (Vercel, Netlify, etc.).

# Available Scripts

  npm run dev ;
  Starts the Vite dev server with hot-reload.

  npm run build ;
  Bundles the app into /dist for production.

  npm run preview ;
  Locally serves the production build.

# Deployment

  Connect your Git repo to a hosting service (Vercel, Netlify).
  Set Environment Variable (VITE_API_BASE_URL).
  Build Command: npm run build
  Publish Directory: dist/

Your front-end will then be live (e.g. https://your-app.vercel.app), and will point at your Render back-end automatically.

# Contributing

  Fork & clone
  Create a branch: git checkout -b feat/awesome-ui
  Make changes & commit
  Open a Pull Request

# License

MIT © KenRobertOchieng



