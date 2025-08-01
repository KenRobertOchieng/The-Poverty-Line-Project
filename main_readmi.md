# The Poverty Line Project

A data-driven platform for collecting, analyzing and visualizing individual income and poverty data to empower governments, NGOs and community leaders with actionable insights.


## Presentation Link

https://1drv.ms/p/c/d84f9ba3ccf129c7/EakItoPMSw1JkVae_5NzOq8BTBTkXv-XSiqXKeVd3OTqLg?e=3Vulv8


## Repository Structure
/
├── client/ # React & Vite frontend (see client/backend_readmi.md)
├── backend/ # Flask REST API (see backend/frontend_readmi.md)
└── README.md # main readmi

## Quick Start

**Clone the repo**  
   
   git clone https://github.com/KenRobertOchieng/The-Poverty-Line-Project.git
   cd The-Poverty-Line-Project


# Frontend

  cd client
  npm install
  npm run dev
  Open http://localhost:5173 in your browser.

# Backend

  cd backend
  python3 -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
  flask db upgrade
  flask run
