# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


This project contains 2 pages 
One for the HomePage 
And one for the EventPage

navigating to event create using navbar will lead to the tab "Create" of the event page
navigating to event list using navbar will lead to the tab "Create" of the event page

using npm run build will create the build file of the project in the /dist folder

creating a new event will save the data uploaded into local storage which will be shown in the List section 

creating new event with new category will automatically add those categories in filter list to find newly created events 
