import { useEffect, useState } from "react"


const Reviewer2 = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count)
    }, []) // kapag [] and dependency ng array, one time lang gagana ang effect

  return (
    <div>
        <h1>Reviewer 2</h1>
        {count}
        <button onClick={()=>setCount(count+1)}>Increment Click Me</button>
    </div>
  )
}

export default Reviewer2