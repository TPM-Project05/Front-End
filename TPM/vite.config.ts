import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
//   base: '/',
//   server: {
//     port: 3000,
//     strictPort: true,
//     open: true,
//   },
//   preview: {
//     port: 3000,
//     strictPort: true,
//   }
})
