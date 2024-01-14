import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { StoreProvider } from "@/app/providers/StoreProvider";
import "@/app/styles/index.scss";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "@/app/providers/ErrorBounadary";
import { ForceUpdateProvider } from "@/shared/lib/render/forceUpdate";
import App from "./app/App";
const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение"
  );
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ForceUpdateProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ForceUpdateProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
export { Theme } from "@/shared/const/theme";
