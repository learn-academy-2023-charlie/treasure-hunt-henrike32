import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square.js"
// import Thunt from "./components/Thunt.js"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  


  return (
    <>
      <h1>|-- TREASURE HUNT --|</h1>
      {/* <ul>
        <li> Click the Boxes and try to find the treasure </li>
      </ul> */}
      <Square board={board} />
      {/* <Thunt board={board}/> */}
      <footer>
        <br></br>
        Made by: Henrique Lambertucci
      </footer>
    </>
  )
}

export default App
