

const SpreadOperatorsArray4 = () => {
    const nums1 = [1, 2, 3];
    nums1[1] = 29
    const nums2 = [4, 5, ...nums1, 6];
    console.log(nums2); //display [4, 5, 1, 29, 6]
  return (
    <div>
        <h1>Reviewer 9 SpreadOperatorsArray4</h1>
    </div>
  )
}

export default SpreadOperatorsArray4