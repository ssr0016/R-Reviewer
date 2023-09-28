

const SpreadOperatorsArray3 = () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, ...nums1, 6];
    console.log(nums2); //display [4, 5, 1, 2, 3, 6]

  return (
    <div>
        <h1>Reviewer 8 SpreadOperatorsArray3</h1>
    </div>
  )
}

export default SpreadOperatorsArray3