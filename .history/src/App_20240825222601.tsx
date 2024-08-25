import { useState } from 'react'

import './App.css'
import { Button } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Welcome to My App</h1>
      <Button variant="contained" color="primary" className="mb-4">
        MUI Button
      </Button>
      <button className="bg-green-500 text-white py-2 px-4 rounded">
        Tailwind Button
      </button>
    </div>
       
    </>
  )
}

export default App
