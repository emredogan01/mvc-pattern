import React, { useEffect, useState } from 'react'
import ListPostView from './ListPostView'
import axios from 'axios'

const ListPostController = () => {
    // post verilerinin tutulduğu stata
    const [data, setData] = useState([])
    const [userName, setUserName] = useState("")
    const [showPopUp, setShowPopUp] = useState(false)


    // apı'den post verilerinin çekilmesi
    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        // verileri props olarak view tarafına geçiyoruz
        <ListPostView userName={userName} setUserName={setUserName} data={data} showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
    )
}

export default ListPostController