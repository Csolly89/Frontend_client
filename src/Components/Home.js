import { useState, useEffect } from 'react'


function Home() {
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const url = `${process.env.REACT_APP_BACKEND_URL}/person/all`
            const response = await fetch(url)
            const data = await response.json()

            console.log(data)
        }
        fetchData()
    }, [] )


    return(
        <div>
            Home
        </div>
    )
}

export default Home