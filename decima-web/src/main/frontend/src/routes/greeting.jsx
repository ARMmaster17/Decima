import {useQuery} from "react-query";

export default function Greeting() {
    async function fetchData() {
        const response = await fetch('/api/protected');
        return response.json();
    }

    function GreetingData() {
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
        <GreetingData/>
    )

}