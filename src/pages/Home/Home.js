import React, {useState} from "react"
import fetchData from "../../helpers/fetchData"

const Home = ()=>{
    const [data, setData] = useState([])
    console.log(data)
    return(
        <div>
            <button onClick={()=>fetchData("series", "", "").then(data=>setData(data))}>Fetch Data</button>
        </div>
    )
}

export default Home;