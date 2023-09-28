

const ErrorMap = () => {
    const nums = [1, 2, 3, 4, 5];
  return (
    <div>
        <h1>Reviewer 4 Error Map</h1>\
        <h2>Note it will render error or something missing because of key prop</h2>
        {nums.map((num)=>(
            <div>{num}</div>
        ))}
    </div>
  )
}

export default ErrorMap