import { useState } from 'react'
import confetti from 'canvas-confetti'
import masina from './assets/1000230548.jpg'
import './App.css'

function App() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)

    // Tikai palaist konfeti, ja šobrīd klikšķis ieslēdzas (nevis izslēdzas)
    if (!clicked) {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
      })
    }
  }

  return (
    <div className="container" onClick={handleClick}>
      <img
        src={masina}
        className={`masina ${clicked ? 'blurred' : ''}`}
        alt="mašīna"
      />
      {clicked && <div className="overlay-text">Šī ir mana mīļākā vieta, jo katru reizi, kad redzu šo mašīnu, atceros, ka varbūt pēc tehnikuma tomēr nebūšu bezpajumtnieks un varēšu sakrāt naudu labai mašīnai!</div>}
    </div>
  )
}

export default App
