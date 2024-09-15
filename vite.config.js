import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Show warnings in the console
      emitError: false, // Disable ESLint errors blocking the build
      failOnError: false, // Don't fail build on ESLint errors
    }),
  ],
});
