# Kanban Dashboard

A simple Kanban Dashboard built using React.js and Vite.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Introduction

This project is a Kanban Dashboard that helps you manage tasks efficiently. It is built using React.js and Vite, and it supports drag-and-drop functionality for task management.

## Features

- Add, edit, and delete tasks
- Drag and drop tasks between columns
- Persistent storage using localStorage
- Responsive design using Tailwind CSS

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
```sh
   git clone https://github.com/ouhssini/kanban.git
```
2. Navigate to the project directory:
```sh
   cd kanban
```
3. Install the dependencies:
```sh
   npm install
```
## Usage
To run the project locally, use the following command:
```sh
   npm run dev
```
## Project Structure

```
kanban/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src/
│   ├── Components/
│   │   ├── Col.jsx
│   │   └── TodoItem.jsx
│   ├── context/
│   │   └── Context.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── routes/
│   │   └── routes.jsx
│   └── views/
│       ├── Home.jsx
│       └── New.jsx
├── tailwind.config.js
└── vite.config.js
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.