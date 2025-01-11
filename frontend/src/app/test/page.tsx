'use client'
import { useEffect, useState } from "react";

interface Data {
    question: string;
}

const Test = () => {

    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [])


    return (
        <div>
            {data && data.question}
        </div>
    )
}
export default Test;