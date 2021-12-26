import { useState } from "react"
import { useEffect } from "react"



const Home = () => {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-2701D371-6038-458C-B1C4-60F3E729E587').then(res => setData(()=>{
            return res
        })
        )
    })

    return <div>{data}</div>
}

export default Home