// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc"; 
// import path from "path"; import { componentTagger } from "lovable-tagger";
//  // https://vitejs.dev/config/ 
//  export default defineConfig(({ mode }) => ({
//  server: {
//    host: "::",
//     port: 8080,
//    },
//     plugins: [react(), mode === "development" &&
//        componentTagger()].filter(Boolean),
//         resolve: {
//            alias: { 
//             "@": path.resolve(__dirname, "./src"),
//            },
//            },
//            }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; 
import path from "path"; 
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./",          // مهم جدًا، GitHub Pages يقرأ كل الملفات نسبيًا
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "docs",    // GitHub Pages يقرأ من مجلد docs
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));