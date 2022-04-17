import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import { ReactQueryDevtools } from 'react-query-devtools'

const queryClient = new QueryClient();

function App() {
    async function fetchData() {
        const response = await fetch('/hello');
        return response.json();
    }

    function Greeting() {
        const {data, status} = useQuery('greeting', fetchData);
        if (status === 'loading') {
            return <div>Loading...</div>;
        }

        if (status === 'error') {
            return <div>Error!</div>;
        }

        return (
            <h1>{data.greeting}</h1>
        )
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Greeting />
            </div>
        </QueryClientProvider>
    )
}

export default App;