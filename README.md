:

👥 User Task Manager (Angular)
This is a simple Angular project that allows you to manage tasks for multiple users. It displays a list of users, and when one is selected, their task list is shown. You can add tasks with a title, due date, and summary.

🚀 Features
List of users with avatars.

View and manage tasks for a selected user.

Add new tasks with a title, due date, and summary.

Responsive and modular component-based structure.

Conditional rendering using Angular directives.

🧱 Built With
Angular 15+

TypeScript

HTML & SCSS/CSS

Angular Directives like *ngFor, *ngIf, [(ngModel)]

Reusable Components:

<app-user>

<app-task>

<app-tasks>

<app-header>

🗂️ Project Structure (Key Components)
pgsql
Copy
Edit
src/
│
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── components/
│   │   ├── header/
│   │   ├── user/
│   │   ├── task/
│   │   └── tasks/
│
├── assets/
└── index.html
🧪 How to Run Locally
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/user-task-manager.git
cd user-task-manager
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
ng serve
Open in browser: Navigate to http://localhost:4200

🧑‍💻 Usage
The user list appears on the left side of the page.

Click on a user to view their tasks.

Add tasks using the input fields: Title, Due Date, and Summary.

Tasks are displayed using <app-task> for each task.

