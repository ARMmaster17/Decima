import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/nav/navbar";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navbar/>
                <Outlet />
            </div>
        </QueryClientProvider>
    )
}

export default App;