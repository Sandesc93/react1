
import Quotetaionmarks from "./Quotetionmarks"


const Quotes = ({quoteBox, colorBox, getRandomAll}) => {

    const colorObj={
    color: colorBox
}
const backObj={
    backgroundColor: colorBox
}

    return (
    <article style={colorObj} className='card'>
        <Quotetaionmarks />
        <p className='card__quote'>{quoteBox.quote}&#8221; </p>
        <h1 className='card__author'>{quoteBox.author} </h1>
        <button className='card__btn' style={backObj} onClick={getRandomAll}> &#62;</button>
    </article>
  )
}

export default Quotes