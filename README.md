# 🎥 Aluraflix - Video Streaming Platform

## Overview
Aluraflix was the final challenge in the React course of the Alura and Oracle Next Education (ONE) program. The goal was to create a React-based API from scratch, inspired by Netflix, using only a Figma design as a reference. This project incorporates various React features and `json-server` to make the API dynamic.

![Aluraflix Home Page](https://github.com/user-attachments/assets/7a5f26d0-71a8-451b-b831-acb5261cc460)

## Features
- **React Framework:** Built using Vite and React.
- **Component-based Architecture:** Modular and reusable components.
- **Styled Components:** Custom styling for a modern look.
- **React Router Dom:** Enables seamless navigation between pages.
- **React Hooks:** Uses `useContext()`, `useEffect()`, and `useState()`.
- **API Interaction:** Fetches and manages data using `json-server` with GET, POST, PUT, and DELETE requests.
- **Form Validation:** Ensures valid input before submitting data.

## How It Works
### Adding Videos
- Users can add new videos using the "New Video" form.
- Videos are categorized and stored in the database.
- The homepage dynamically updates with new videos.

![New Video Page](https://github.com/user-attachments/assets/7e8c834d-fead-49f9-a722-53681eeef02c)
![New Video Page](https://github.com/user-attachments/assets/aa4928c2-4348-43ad-9bf9-6673314c290a)

### Editing and Deleting Videos
- Videos can be edited directly from the homepage.
- Clicking "Edit" allows users to update video details.
- Clicking "Delete" removes the video from the database.

![Edit Video](https://github.com/user-attachments/assets/024ea02b-6859-4ea5-863f-f4af971885b7)

This setup makes Aluraflix highly dynamic, allowing users to personalize their video collections effortlessly. 😄

## Technologies Used
- **React**
- **json-server**
- **JavaScript (ES6+)**
- **CSS3**

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/dharitcha/react-video-streaming-project.git
   ```
2. Navigate to the project folder:
   ```sh
   cd aluraflix
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Start the mock API server:
   ```sh
   json-server --watch db.json --port 3000
   ```
6. Open the project in your browser.

## Live Demo
You can access the live version here: **[Aluraflix on Vercel](https://aluraflix-puce.vercel.app/)**

⚠ **Note:** Full functionality requires `json-server` to be running locally.

## License
This project is open-source and available under the MIT License.
