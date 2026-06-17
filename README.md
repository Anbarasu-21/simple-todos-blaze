# Meteor.js Todo App

A responsive Todo application built using **Meteor.js**, **Blaze**, and **MongoDB**. The application allows users to create, manage, categorize, and reorder tasks through an intuitive interface.

## Features

* Create new tasks
* Mark tasks as completed
* Delete tasks
* Filter completed tasks
* Categorize tasks into:

  * Work
  * Personal
  * Urgent
* Drag-and-drop task reordering
* Persistent task order stored in MongoDB
* Reactive UI updates using Blaze templates

## Tech Stack

* Meteor.js
* Blaze
* MongoDB
* SortableJS
* JavaScript
* HTML
* CSS

## Project Structure

```
simple-todos-blaze
│
├── client
│   ├── main.js
│   └── main.css
│
├── server
│   └── main.js
│
├── imports
│   ├── api
│   │   ├── TasksCollection.js
│   │   └── tasksMethods.js
│   │
│   └── ui
│       ├── App.html
│       ├── App.js
│       ├── Task.html
│       ├── Task.js
│       ├── Login.html
│       └── Login.js
│
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Anbarasu-21/simple-todos-blaze.git
```

Move to the project directory:

```bash
cd simple-todos-blaze
```

Install dependencies:

```bash
meteor npm install
```

Start the application:

```bash
meteor
```

Open the application in your browser:

```
http://localhost:3000
```

## Assignment Enhancements

### Task Categories

Tasks can be categorized into:

* Work
* Personal
* Urgent

### Drag-and-Drop Reordering

Tasks can be reordered using drag-and-drop functionality. The order is persisted in MongoDB so that it remains unchanged after refreshing the page.

## Author

**Anbarasu**
