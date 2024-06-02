# Task Manager App

## Description
The Task Manager app is designed to help users manage and track their daily tasks efficiently. The app categorizes tasks and displays them in a user-friendly interface. 

## Components

### 1. Header.js
- Usage: Displays a greeting to the user and shows the number of tasks for the day. Includes an icon for user profile.
- Props: None

### 2. SearchBar.js
- Usage: Provides a search input field for users to search through tasks.
- Props: None

### 3. CategoryCard.js
- Usage: Represents a task category card with an image, title, and number of tasks.
- Props:
  - title: The title of the category (e.g., Exercise, Study).
  - tasks: The number of tasks in this category.
  - imageUri: The image associated with the category.

### 4. TaskCard.js
- Usage: Displays individual ongoing tasks in a list.
- Props:
  - task: The description of the task.

## Screenshots

### Home Screen
![photo_2024-06-02_18-09-16](https://github.com/11024572/rn-assignment3-11024572/assets/170142523/10bfd24b-2d93-4a41-b10f-42969f57e20e)


### Categories


### Ongoing Tasks
![photo_2024-06-02_18-09-23](https://github.com/11024572/rn-assignment3-11024572/assets/170142523/444075b1-ac88-4de4-b245-b58792ea80ed)


## Project Structure

TaskManager/
├── assets/
│   ├── exercise.png
│   ├── study.png
│   ├── code.png
│   ├── cook.png
│   ├── read.png
│   ├── travel.png
│   ├── meditate.png
│   ├── play.png
├── components/
│   ├── CategoryCard.js
│   ├── Header.js
│   ├── SearchBar.js
│   ├── TaskCard.js
├── App.js
├── MainScreen.js

## Getting Started

### Prerequisites
- Node.js
- Expo CLI

### Installation

1. Clone the repository:
      git clone <repository_url>
   cd <repository_name>
   

2. Install dependencies:
      npm install
   

3. Start the project:
      npm start
   

4. Scan the QR code with your Expo Go app to view the app on your mobile device.

---

