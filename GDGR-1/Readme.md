# Steps to Set Up React Environment with Vite

## 1. Install Node.js and npm
Download and install Node.js from [nodejs.org](https://nodejs.org/). npm is included with Node.js.

## 2. Create a New React Application with Vite
```sh
npm install -g create-vite
npx create-vite
```
- Enter the name of the folder for your project.
- Select **Framework**: React
- Select **Variant**: JavaScript

```sh
npm install
npm run dev
```

## Adding Tailwind CSS
```sh
npm install tailwindcss @tailwindcss/vite
```
After installing Tailwind CSS, add the following to `index.css`:
```css
@import "tailwindcss";
```

## Configure the Vite Plugin
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    port: 3000, // Change the default port to 3000
  },
  
});





## Best Font Families
- Space Grotesk

## Best Colors
- For Backgorund - #0a0a0a
- For Text - #f3f4f6

