import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Change 'repo-name' to your GitHub-Repository-Name
  // If it is your main page (username.github.io) is, use '/'
  base: '/repo-name/', 
  build: {
    outDir: 'dist',
  },
});

