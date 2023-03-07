import { Navigate, Route, Routes } from 'react-router-dom'
import Home from 'src/pages/Home'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  )
}

export default App
