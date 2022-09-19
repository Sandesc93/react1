
import quotes from './json/quotes.json'
import './App.css'
import { useState } from 'react'
import Quotes from './components/QuoteBox'
import color from './utils/color'

function App() {
  //calculating random index
 const getIndexQuote = arr=>parseInt(Math.random()*arr.length) 
//taking element by index
const firstQuote= quotes[getIndexQuote(quotes)]
const firstColor= color[getIndexQuote(color)]

const [quoteBox, setQuoteBox] = useState(firstQuote)
const [colorBox, setColorBox] = useState(firstColor)

const backObj={
  backgroundColor:colorBox
}
//calculating new values
const getRandomAll = () =>{
  setQuoteBox(quotes[getIndexQuote(quotes)])
  setColorBox(color[getIndexQuote(color)])
}

console.log(quotes)
  return (
    <div  style={backObj} className="App">
      <p><Quotes
        quoteBox={quoteBox}
          colorBox={colorBox}
        getRandomAll={getRandomAll}
       /></p>
    </div>
  )
}
export default App
