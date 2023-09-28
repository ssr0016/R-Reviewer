

const Map = () => {
    const nums = [1, 2, 3, 4, 5];

  return (
    <div>
        <h1>Reviewer 3 Map</h1>
        {nums.map((num)=>(
            <div key={num}>{num}</div>
        ))}

    </div>
  )
}

export default Map