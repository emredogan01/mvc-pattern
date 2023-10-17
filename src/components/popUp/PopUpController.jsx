import React, { useEffect, useState } from 'react'
import PopUpView from './popUpView'
import axios from 'axios'

const PopUpController = ({ setShowPopUp, userName }) => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/posts?user=${userName}`)
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <PopUpView setShowPopUp={setShowPopUp} userName={userName}
            data={data} />
    )
}

export default PopUpController;