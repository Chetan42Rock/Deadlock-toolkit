# Deadlock Detection & Prevention Tool

A React-based interactive visualization tool for understanding and simulating deadlocks in operating systems.

## Features

- Interactive deadlock simulation
- Visual representation of resource allocation
- Deadlock detection algorithm
- Prevention method suggestions
- Modern UI with Tailwind CSS

## Technologies Used

- React
- Tailwind CSS
- React Router
- GitHub Pages (for deployment)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm start`

## Deployment

To deploy to GitHub Pages:

1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## License

MIT
