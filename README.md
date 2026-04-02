# ExpenseFlow – Finance Expense Tracker Dashboard

## Project Overview

ExpenseFlow is a simple finance dashboard web application that helps users track their income and expenses in one place. The application provides a clean interface with charts and statistics to understand financial activity and spending patterns.

This project was built using **React, TypeScript, and Tailwind CSS** to practice building modern frontend dashboards and working with reusable components.

---

## Features

### Authentication

* Login and Signup interface
* Basic session handling using local storage
* Protected pages that redirect users if they are not logged in

### Dashboard

* Displays important financial information such as:

  * Total Balance
  * Total Income
  * Total Expenses
  * Savings
* Charts to visualize income and expenses
* Category-based expense breakdown
* Recent transactions list
* Budget tracking progress

### Income Management

* View different income sources
* Monthly income trend visualization
* Income categories like Salary, Freelance, or Investments

### Expense Management

* Track different expense categories
* View expense history
* Analyze expense trends with charts

### User Interface

* Responsive layout for different screen sizes
* Sidebar navigation for easy access
* Card-based dashboard design

---

## Technologies Used

* **React** – Frontend library
* **TypeScript** – For type-safe development
* **Tailwind CSS** – For styling
* **React Router** – For page navigation
* **Recharts** – For charts and data visualization
* **Framer Motion** – For simple animations
* **Lucide React** – For icons
* **Vite** – For fast development and build

---

## Installation and Setup

### 1. Clone the repository

```
git clone <repository-url>
cd expense-tracker
```

### 2. Install dependencies

```
npm install
```

### 3. Start the development server

```
npm run dev
```

### 4. Run the application

Open the browser and go to:

```
http://localhost:5173
```

---

## Project Structure

```
expense-tracker
│
├── src
│   ├── components
│   │   ├── sidebar
│   │   ├── charts
│   │   ├── stats-card
│   │   └── forms
│   │
│   ├── pages
│   │   ├── dashboard
│   │   ├── income
│   │   └── expenses
│   │
│   ├── context
│   │   └── auth-context
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── README.md
```

---

## How the Application Works

1. The user logs in or creates an account.
2. After login, the dashboard page shows financial summary data.
3. Users can view income and expense details.
4. Charts help visualize financial patterns.
5. Data is stored locally for demonstration purposes.

---

## Future Improvements

Possible improvements for this project include:

* Backend integration with a database
* Real user authentication
* Export reports as PDF or Excel
* Dark mode support
* Custom expense categories
* Mobile application version

---

## Notes

* This project currently uses **mock data** for demonstration.
* Login works with any email and password because it is a demo application.
* Data is stored in **localStorage**.

---

## Purpose of the Project

The goal of this project was to practice:

* React component structure
* State management
* Building dashboard layouts
* Data visualization using charts
* Creating responsive UI designs

---

## Author

Manisha Sharma
B.Tech IT Student
