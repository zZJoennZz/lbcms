import './bootstrap';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from './app/App';

const queryClient = new QueryClient();

createRoot(document.getElementById("app")).render(
    <QueryClientProvider client={queryClient}>
        <Router>
            <App />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
