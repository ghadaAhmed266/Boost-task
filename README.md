# Boost Task

## 📌 Overview
Boost Task is a web application project focused on building a clean, responsive, and user-friendly interface using Angular, Tailwind CSS, and PrimeNG.

This project demonstrates role-based dashboards, component structuring, and modern UI practices.

## 🚀 Features
- Responsive UI design with Tailwind CSS
- Role-based dashboards using Angular Signals
- Integration of PrimeNG components for enhanced UI
- Authentication and user role management (planned)
- Clean and maintainable code structure


## 🛠️ Technical Requirements & Implementation

- Used **standalone components** to promote modularity and reusability.
- Implemented  one **custom directive (ViewIf)** to control rendering, adhering to best practices by **avoiding `*ngIf`, `@if`, or inline conditional expressions** in templates.
- Leveraged **Angular Signals (role)** and `@Input` bindings for **condition in the custom directive ViewIf** and clean UI state management.
- Properly configured **Angular routing** with route **guards** for secure navigation based on user roles.
- Effectively handled **loading** and **error** states to enhance user experience during asynchronous operations Using the **ViewIf Custom Directive**.

## 🧰 Tech Stack
- Angular
- Tailwind CSS
- PrimeNG
- TypeScript

## 📂 Project Structure

src/
├── app/
│ ├── pages/
│ │  ├── data/
│ │  ├── role/
│ ├── core/
│ │ ├── components/
│ │ ├── directives/
│ │ ├── guards/
│ │ ├── services/


## ⚙️ Installation & Run

1. Clone the repository:
git clone https://github.com/ghadaAhmed266/Boost-task.git


2. Navigate to the project folder:
cd Boost-task

3. Install dependencies:
npm install

4. Run the development server:
ng serve

5. Open your browser at:
http://localhost:4200

🌐 Live Demo
https://boost-task-rho.vercel.app/data

👩‍💻 Author

Ghada Ahmed
