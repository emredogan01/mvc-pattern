import "./assets/style.scss"
import AddPostController from "./pages/AddPost/AddPostController"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListPostController from "./pages/ListPost/ListPostController"
import Header from "./components/Header"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListPostController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
