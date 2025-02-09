import { useEffect } from "react";
import { useState } from "react";

export function useFetch (url)  {
    const [value, setValue] = useState({});
    const [loading, setLoading] = useState(true)

	const getDetails = async () => {
		const data = await fetch(url);
		const response = await data.json();
        setValue(response);
        setLoading(false);
	};


    useEffect(() => {
    },[loading])

	useEffect(() => {
		getDetails();
    }, [url]);
    
    return {
        value,
        loading
    }
};

// export default useFetch;
