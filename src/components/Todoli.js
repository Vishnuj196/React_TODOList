import React from 'react'
import '../App.css';
export default function Todoli(props) {

    const {todoarr} = props;
    const  handleUl = props.handleUl;
    const {handleUldouble} = props;
    

    return (
        <div>
            <ul id="todos" onClick={handleUl} onDoubleClick={handleUldouble}className='todos'>
                {todoarr.map((i) => {
                    return <li key={i} className="li_class" id={i}>{i}</li>
                })}
            </ul>
        </div>
    )
}

