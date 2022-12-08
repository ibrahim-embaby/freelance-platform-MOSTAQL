import './browser.css'

function Browser() {
    return (
        <div className='browser'>
            <span className='pageArrow'>{"<"}   </span>
            <span className='pageNumber'>4</span>
            <span className='pageNumber'>3</span>
            <span className='pageNumber'>2</span>
            <span className='pageNumber active'>1</span>
            <span className='pageArrow'> {">"} </span>
        </div>
    )
}

export default Browser