# srckit-api

<p align="center">
  <strong>Parse API endpoint definitions and manage collections.</strong>
</p>

<p align="center">
  <a href="https://api.srckit.org">Live Demo</a> ·
  <a href="https://github.com/srckit-org/srckit">SrKit Suite</a> ·
  <a href="https://github.com/srckit-org/srckit-api/issues">Report Bug</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI 9" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/github/license/srckit-org/srckit-api?style=flat-square" alt="License" />
</p>

---

## Overview

srckit-api helps you define and organize API endpoints. Parse method+path definitions into structured endpoints and save them as collections.

## Features

### API Runner
- **Parse endpoints** — convert `METHOD /path` definitions to structured data
- **Visual display** — see parsed endpoints with method badges
- **Quick input** — paste multiple endpoints at once

### Collection Manager
- **Save endpoints** — persist collections to localStorage
- **Add/remove** — manage your endpoint library
- **Method display** — color-coded HTTP methods

## Getting Started

```bash
git clone https://github.com/srckit-org/srckit-api.git
cd srckit-api
npm install
npm run dev
```

## Example Input

```
GET /api/users
POST /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id
```

## License

MIT © [srckit-org](https://github.com/srckit-org)
