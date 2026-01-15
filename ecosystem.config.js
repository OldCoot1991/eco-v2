module.exports = {
  apps: [{
    name: "ecologistika",
    script: "npm start",
    cwd: "/opt/ecologistika/frontend/html/",
    autorestart: true,
    env: {
      "PORT": 3001
    }
  }]
}
