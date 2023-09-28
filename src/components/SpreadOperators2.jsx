
const SpreadOperators2 = () => {
    const a = {b:1, c: 2};
    const c = 4;
    const b = { ...a, d:3, c};
    console.log(b); // {b1:1, c:4, d:3}

  return (
    <div>
        <h1>Reviewer 6 SpreadOperators2</h1>
    </div>
  )
}

export default SpreadOperators2