

const FilterArray1 = () => {
    const nums1 = [1, 2, 3 ,4 ,5 , 6];
    const even = nums1.filter((n)=> n % 2===0);
    console.log(even.slice(0, 3)) // [2, 4, 6]
    //slice(0,3) // ang first parameters is the first element of array, 
    // the second parameters of slice is the number of elemts inside of an array

  return (
    <div>
        <h1>Reviewer 2 FilterArray1</h1>
    </div>
  )
}

export default FilterArray1