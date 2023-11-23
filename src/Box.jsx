import './Box.css'
import cross from './assets/cross.png';
import circle from './assets/circle.png'
import { useState } from 'react';
export default function Box({ key1, val, click }) {
    return (
        <>
            <div className="box" onClick={click}>
                {val[key1] !== "" && (
                    <img
                        style={{ width: 60, height: 60, margin: 'auto' }}
                        src={val[key1] === 'x' ? cross : circle}
                        alt={val[key1]}
                    />
                )}
            </div>
        </>
    )
}