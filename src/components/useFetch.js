import { useState, useEffect } from 'react'


const useFetch = (url) => { // always call the function starting with 'use' as its recognised as a hook

    // const url = 'http://localhost:8000/blogs'; we get this from the npm json-server terminal
    // Note the url will be passed as an endpoint inside useState when we call it inside another component

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); // for the loading conditional render

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((res) => {
                    return res.json();

                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                })
                .catch((error) => {
                    if (error.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        console.log(error.message)
                        setIsPending(true)
                    }
                })
            // eslint-disable-next-line react-hooks/exhaustive-deps

        }, 1000);

        return (() => abortCont.abort())

    }, [url]);

    return { data, isPending } // this is the sate being returned for using  custom hook

}

export default useFetch
