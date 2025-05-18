import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { IndexPage } from "@pages/IndexPage";

import "./index.css";
import { TodoPage } from "@pages/TodoPage";
import { Page404 } from "@pages/404";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" index element={<IndexPage />}>
                </Route>
                <Route path="/task/:id" element={<TodoPage />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </StrictMode>
    </BrowserRouter>
);
