# 📅 Smart Calendar App

A modern, full-stack task management application featuring a highly interactive calendar interface, **Drag-and-Drop** functionality, and automated public holiday integration.

## ✨ Key Features

* **Interactive Grid**: Dynamic 42-day calendar generation with precise current-month highlighting.
* **Intuitive Drag-and-Drop**: Seamlessly move tasks between dates using `@hello-pangea/dnd` for an effortless planning experience.
* **Smart Task Management**: Create, edit, and delete tasks via a sleek modal interface.
* **Label System**: Color-code your tasks with a strict limit of **4 labels per task** to maintain visual clarity.
* **Holiday Integration**: Real-time fetching of public holidays (UA/US) via the Nager.Date API based on the selected year and language.
* **Global Search**: Instant task filtering by title with a "Go to Date" feature for quick navigation.
* **Localization**: Full support for English and Ukrainian, including complex noun declensions (e.g., "1 card", "2 cards", "5 cards").
* **Optimistic UI Updates**: Instant interface feedback during drag-and-drop operations, eliminating server-response lag.

## 🛠 Tech Stack

### Frontend
* **React 18** (TypeScript)
* **Emotion** (Styled Components) – For dynamic, scoped CSS-in-JS.
* **Axios** – For reliable API communication.
* **Hello-Pangea/DnD** – A powerful accessible drag-and-drop library.

### Backend
* **Node.js / Express**
* **MongoDB / Mongoose** – To store tasks with specific `order` and `date` parameters.



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

## 📂 Project Structure

* `src/components/` — UI components (Header, TaskModal, TaskItem).
* `src/utils/` — Core logic: date generation, label limits, and localization helpers.
* `src/constants/` — Project constants: color palettes and global theme styles.
* `src/types/` — Centralized TypeScript interfaces and definitions.
* `src/api/` — API service configurations.

---
Built with ❤️ for better productivity.