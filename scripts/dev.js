// Development script with enhanced hot reloading settings
const { execSync } = require("child_process");
const os = require("os");

// Set environment variables for better hot reloading on Windows
const env = {
  ...process.env,
  CHOKIDAR_USEPOLLING: "true",
  FAST_REFRESH: "true",
  WATCHPACK_POLLING: "true",
};

// Command to run Next.js dev server
const command = "npx next dev --port 9000";

console.log(
  "Starting Next.js development server with enhanced hot reloading..."
);
try {
  // Run the command with the enhanced environment variables
  execSync(command, {
    env,
    stdio: "inherit",
    windowsHide: false,
  });
} catch (error) {
  console.error("Error starting development server:", error);
  process.exit(1);
}
