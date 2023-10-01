import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'
import ListItem from './ListItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListItem />
      <Posts></Posts>

    </>
  )
}

export default App
