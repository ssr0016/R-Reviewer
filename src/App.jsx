
import { useState } from 'react';
import './App.css'
import Reviewer1 from './components/reviewer1';
import Reviewer2 from './components/Reviewer2';
import Map from './components/Map';
import ErrorMap from './components/ErrorMap';
import SpreadOperators from './components/SpreadOperators';
import SpreadOperators2 from './components/SpreadOperators2';
import SpreadOperatorsArray from './components/SpreadOperatorsArray';
import SpreadOperatorsArray2 from './components/SpreadOperatorsArray2';
import SpreadOperatorsArray3 from './components/SpreadOperatorsArray3';
import SpreadOperatorsArray4 from './components/SpreadOperatorsArray4';
import FilterArray from './components/FilterArray';
import FilterArray1 from './components/FilterArray1';
import FilterArray2 from './components/FilterArray2';
import Props from './components/Props';

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prevState=> prevState + 1)
    console.log(`${count} Increment `)
  }
 
  const handleDecrement = () =>{
    setCount(prevState => prevState -1)
    console.log(`${count} Decrement `)
  }

  return (
   <div>
    <Props/>
  <br />
   <hr />
   <br />
    <FilterArray2 />
   <br />
   <hr />
   <br />
  <FilterArray1/>
   <br />
   <hr />
   <br />
    <FilterArray />
   <br />
   <hr />
   <br />
    <SpreadOperatorsArray4 />
   <br />
   <hr />
   <br />
  <SpreadOperatorsArray3 />
   <br />
   <hr />
   <br />
  <SpreadOperatorsArray2/>
  <br />
   <hr />
   <br />
    <SpreadOperatorsArray />
    <br />
   <hr />
   <br />
    <SpreadOperators2 />
  <br />
   <hr />
   <br /> 
    <SpreadOperators />
  <br />
   <hr />
   <br /> 
    <ErrorMap />
   <br />
   <hr />
   <br /> 
    <Map />
   <br />
   <hr />
   <br /> 
   <Reviewer2 />
   <br />
   <hr />
   <br /> 
  <Reviewer1 />
   <br />
   <hr />
   <br />

    {count}
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
   </div>


)
}

export default App
