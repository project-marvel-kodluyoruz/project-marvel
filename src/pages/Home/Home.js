import React, {useEffect, useState} from "react"
import fetchData from "../../helpers/fetchData"

import handleGetData from "../../helpers/handleGetData" 
import handleSetData from "../../helpers/handleSetData" 

const Home = ()=>{
    const [data, setData] = useState([])
    const [force, setForce] = useState(0)

    
    
    // useEffect(()=>{
    //     handleGetData().then((data)=>setData(data ? data : []))
    // },[force])
    // const handleLike = async () =>{
    //     await handleSetData([...data, {id: "123", like: 250}])
    //     setForce(force + 1)
    // }
    return(
        <div>
            <button onClick={()=>fetchData("series", "", "").then(data=>setData(data))}>Fetch Data</button>
            {/* <button onClick={handleLike}>setData</button> */}
        </div>
    )
}

export default Home;