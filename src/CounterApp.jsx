import React, { useState } from 'react';

export default function CounterApp() {
    const [contador, setCount] = useState(1);

    return (
        <div>

            <div class="container text-center">
                <div class="row">
                    <p>Me presionaste {contador} Veces</p>
                    <button className='btn btn-primary col' onClick={() => setCount(contador + 1)}>Presioname</button>
                    <button className='btn btn-primary col ' onClick={() => setCount(0)}>Reset </button>
                    <button className='btn btn-primary col' onClick={() => setCount(contador - 1)}>Menos</button>
                </div>
            </div>

        </div>
    );
}

