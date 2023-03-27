import { useEffect, useState } from "react"
import { server_calls } from "../api/server"


type BookData = {
    id: string,
    title: string,
    author: string,
    genre: string,
    length: string,
    ISBN: string,
}

export const useGetData = () => {
  const [ bookData, setData ] = useState<BookData[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { bookData, getData:handleDataFetch }
  
}
