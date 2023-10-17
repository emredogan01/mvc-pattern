import React from 'react'
import AddPostView from './AddPostView'
import AddPostModel from './addPostModel'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPostController = () => {
    const navigate = useNavigate();

    // class'ın örneğini oluşturma
    const model = new AddPostModel()
    // state'in ilk değerini state'e verdik
    const [form, setForm] = useState(model.state)
    const onInputChange = (key, e) => {
        // setForm'u state'i gğncellemek için çağırdık
        // içerisine state'e atadığımız modeli spread ile form objesini aldık
        // daha sonra köşeli parantez ile bir objeye key geleceğini belirttik
        // ve key'e karşlık gelen value'e ekledik
        setForm({
            ...form, [key]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.user || !form.text) {
            alert("Tüm alanları doldurunuz!")
            return;
        }
        axios.post("http://localhost:8000/posts", form)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }
    return (
        <AddPostView
            onInputChange={onInputChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default AddPostController;