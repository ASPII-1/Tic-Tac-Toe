import React, { useState, useEffect } from 'react';
import './Tic_Toe.css';
import Box from './Box';

export default function Tic_Toe() {
    const [win, setWin] = useState(false);
    const [turn, setTurn] = useState(0);
    const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);

    const Winner = () => {
        for (let i = 0; i <= 6; i += 3) {
            if (value[i] !== "" && value[i] === value[i + 1] && value[i] === value[i + 2]) {
                setWin(true);
            }
        }
        for (let i = 0; i < 3; i++) {
            if (value[i] !== "" && value[i] === value[i + 3] && value[i] === value[i + 6]) {
                setWin(true);
            }
        }
        if (value[0] !== "" && value[0] === value[4] && value[0] === value[8]) {
            setWin(true);
        }
        if (value[2] !== "" && value[2] === value[4] && value[2] === value[6]) {
            setWin(true);
        }
    };

    const click = (idx) => {
        if (win === false && value[idx] === "") {
            setValue((val) => {
                const updatedArray = [...val];
                updatedArray[idx] = turn % 2 === 0 ? "x" : "o";
                return updatedArray;
            });
            setTurn((turn) => turn + 1);
        }
    };

    const handleReset = () => {
        setWin(false);
        setTurn(0);
        setValue(["", "", "", "", "", "", "", "", ""]);
    };

    useEffect(() => {
        Winner();
    }, [value, turn]);

    return (
        <>
            <main className='container'>
                <h1 className="Title">Tic-Tac-Toe Game By <span className="name"> Suryansh</span></h1>
                <section>
                    <div className='Row'>
                        <Box key1={0} val={value} click={() => click(0)} />
                        <Box key1={1} val={value} click={() => click(1)} />
                        <Box key1={2} val={value} click={() => click(2)} />
                    </div>
                    <div className='Row'>
                        <Box key1={3} val={value} click={() => click(3)} />
                        <Box key1={4} val={value} click={() => click(4)} />
                        <Box key1={5} val={value} click={() => click(5)} />
                    </div>
                    <div className='Row'>
                        <Box key1={6} val={value} click={() => click(6)} />
                        <Box key1={7} val={value} click={() => click(7)} />
                        <Box key1={8} val={value} click={() => click(8)} />
                    </div>
                </section>
                {turn !== 9 ? (win === false ? <h2 className="Score">Player <span style={{ color: "#0092ca" }}>{turn % 2 + 1}</span></h2> : <h2 className='Score' style={{ color: "green" }}>Winner is {(turn % 2 + 1 == 1 ? 2 : 1)}</h2>) : <h2 className="Score">It is a <span style={{ color: "#26ffcb" }}>Tie</span></h2>}
                <button className="Reset" onClick={handleReset}>Reset</button>
            </main>
        </>
    );
}
