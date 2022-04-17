import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'
import { Outlet, Link } from "react-router-dom";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <nav style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                    }}
                >
                    <Link to="/register">Register</Link> |{' '}
                    <Link to="/login">Login</Link>
                </nav>
                <Outlet />
            </div>
        </QueryClientProvider>
    )
}

export default App;