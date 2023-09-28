

const FilterArray2 = () => {
    const nums1 = [1, 2, 3, 4, 5 ,6];
    const even = nums1.filter((n)=> n % 2 === 0);
    console.log(even.slice(1,3))// display 4, 6

  return (
    <div>
        <h1>Reviewer 3 FilterArray2</h1>
    </div>
  )
}

export default FilterArray2