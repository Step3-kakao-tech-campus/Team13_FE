import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";

if (import.meta.env.VITE_USE_MOCK_API) {
  const { worker } = await import("./mocks/browser.js");
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
