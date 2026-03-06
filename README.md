# 📅 Smart Calendar App

A modern, full-stack task management application featuring a highly interactive calendar interface, **Drag-and-Drop** functionality, and automated public holiday integration.

## ✨ Key Features

* **Secure Authentication**: Robust JWT-based system using **HttpOnly Cookies** for protection against XSS. 🔐
* **Live API Documentation**: Integrated **Swagger UI** for real-time API exploration and testing. 📖
* **Interactive Grid**: Dynamic 42-day calendar with precise current-month highlighting and smooth navigation.
* **Intuitive Drag-and-Drop**: Effortlessly move tasks between dates using `@hello-pangea/dnd`.
* **Smart Task Management**: Create, edit, and delete tasks via a sleek modal (restricted to authorized users).
* **Holiday Integration**: Real-time fetching of public holidays (UA/US) via Nager.Date API.
* **Optimistic UI**: Instant interface feedback during operations, eliminating server-lag perception.

## 🛠 Tech Stack

### Frontend
* **React 18** (TypeScript)
* **Emotion** (Styled Components) – For dynamic, scoped CSS-in-JS.
* **Axios** – For reliable API communication.
* **Hello-Pangea/DnD** – A powerful accessible drag-and-drop library.

### Backend
* **Node.js / Express**
* **MongoDB / Mongoose** – Advanced task ordering and user associations.
* **JWT & Cookie-Parser** – Secure stateless session management.
* **Swagger UI Express** – Automated OpenAPI 3.0 documentation.



## 📖 API Documentation

The API is fully documented and can be tested directly from the browser:

* **Production**: [https://calendar-tau-green.vercel.app/api-docs](https://calendar-tau-green.vercel.app/api-docs)
* **Local**: `http://localhost:5000/api-docs`

---

## 🚀 Getting Started

You will need to run the **Server** and the **Client** in separate terminal windows.

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/IrynaShashko/calendar.git](https://github.com/IrynaShashko/calendar.git)
    ```

2. **Install dependencies and run the Client (Frontend):**
    ```bash
    cd client
    npm install
    npm run dev
    ```

3. **Install dependencies and run the Server (Backend):**
    ```bash
    cd server
    npm install
    npm run dev
    ```

---

Built with ❤️ for better productivity.