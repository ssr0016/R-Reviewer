import { useEffect, useState } from "react"


const Reviewer1 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count);
    })

  return (
    <div>
        <h1>Reviewer 1</h1>
        {count}
        <button onClick={()=>setCount(count+1)}>Increment Click Me</button>
    </div>
  )
}

export default Reviewer1