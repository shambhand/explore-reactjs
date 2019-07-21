import React, {useState, useEffect} from 'react';

function StateWithEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `${count} times`;
    })

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click Me to increase Count</button>
            <button onClick={()=>{setCount(count-1)}}>Click me to decrease Count</button>
        </div>
    );
}
export default StateWithEffect;