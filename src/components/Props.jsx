import  { useState } from 'react'

const Props = () => {
    const [count, setCount] = useState(0)

    const handleDoubleIncrement = () =>{
        setCount(count + 2)
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleDoubleIncrement}>Double Increment</button>
    </div>
  )
}

export default Props