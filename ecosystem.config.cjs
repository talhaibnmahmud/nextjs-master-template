// eslint-disable-next-line @typescript-eslint/no-require-imports
const dotenv = require("dotenv");

dotenv.config({
  path: [".env.production.local", ".env.local", ".env"],
  encoding: "utf-8",
});

const { PORT = 3000 } = process.env;

module.exports = {
  apps: [
    {
      name: "fantasee",
      script: "pnpm",
      args: "start",
      instances: 1,
      autorestart: true,
      exec_mode: "cluster",
      appendEnvToName: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
        PORT: PORT,
      },
      env_staging: {
        NODE_ENV: "production",
        PORT: PORT,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: PORT,
      },
    },
  ],
};
