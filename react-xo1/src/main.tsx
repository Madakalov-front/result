import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "@/xo/app/store/xo";

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</StrictMode>
	);
}
