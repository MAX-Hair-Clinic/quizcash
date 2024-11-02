import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./i18n";
import "./index.css";
import AuthProvider from "./lib/modules/Authentication/AuthProvider.tsx";
import { LanguageProvider } from "./lib/modules/Language/LanguageProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
