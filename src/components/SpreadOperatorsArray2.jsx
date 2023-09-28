

const SpreadOperatorsArray2 = () => {
    const nums1 = [1, 2 ,3];
    const nums2 = [4, 5, 6, ...nums1]
    console.log(nums2); //display [4, 5, 6 , 1 , 2, 3]

  return (
    <div>
        <h1>Reviewer 7 SpreadOperatorsArray</h1>
    </div>
  )
}

export default SpreadOperatorsArray2