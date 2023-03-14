# TrackIT Frontned

## Project Walkthrough
1. Install Next.Js using pnpm:
   - `pnpm create next-app --js`
2. Setup Tailwindcss and Favicon: 
   - pnpm install -D tailwindcss postcss autoprefixer --save 
   - pnpm tailwindcss init -p
3. Set up sidebar component
4. installed Tailwind prettier formatter and added to plugin in `prettier.config.js`
   - `pnpm install -D prettier prettier-plugin-tailwindcss --saave`
   - plugins: [require('prettier-plugin-tailwindcss')],
5. Updated sidebar and finished dashboard UI
6. Installed chartjs, faker and updated dashboard to use chartjs:
   - `pnpm add chart.js react-chartjs-2 --save`
   - `pnpm add faker`