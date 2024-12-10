import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'
TextField

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const validateInput = (inputTag) => {
    console.log(inputTag);
    const { name, value } = inputTag
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/)); //double exclamation is used to covert the reslt into boolean
    console.log(!!value.match(/^\d+(\.\d+)?$/));

    if (name == 'principle') {
      setPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidPrinciple(false)

      } else {
        setinvalidPrinciple(true)
      }
    } else if (name == 'rate') {
      setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidRate(false)
      } else {
        setinvalidRate(true)
      }
    } else {
      setYear(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidYear(false)
      } else {
        setinvalidYear(true)
      }
    }
  }
  const handleCalculate =(e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle && rate && year ){
      setInterest(principle*rate*year/100)

    }else{
      alert("please fill the form completely")
    }
    
  }
  const handleReset =()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
   }
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-black'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest easily !</p>
          <div className='bg-success p-5 rounded text-center'>
            <h1 className='text-light'>₹ {interest}</h1>
            <p className='fw-bolder text-light'>Total Simple Interest</p>
          </div>
          <form className='mt-5'>
            {/* Principle amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e) => validateInput(e.target)} className='w-100' id="Outlined-principle" label="₹ Principle Amount" variant="outlined" />
            </div>
            {/* INVALID PRINCIPLE STATE */}
            {invalidPrinciple && <div className='text-danger fw-bolder mb-5'>
              *Invalid Principle Amount
            </div>}
            {/* Rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e) => validateInput(e.target)} className='w-100' id="Outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* INVALID Rate */}
            {invalidRate && <div className='text-danger fw-bolder mb-5'>
              *Invalid Rate
            </div>}
            {/* year */}
            <div className='mb-3'>
              <TextField value={year || ""} name='year'  onChange={(e) => validateInput(e.target)}  className='w-100' id="Outlined-time" label="₹ Time Period (Yr)" variant="outlined" />
            </div>
            {/* INVALID YEAR */}
            {invalidYear && <div className='text-danger fw-bolder mb-5'>
              *Invalid Year
            </div>}
            {/* buttons */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled ={invalidPrinciple || invalidRate || invalidYear} className='bg-success' style={{ width: '50%', height: '60px' }} variant="contained">Calculate</Button>
              <Button type='reset' onClick={handleReset} className='border border-danger text-danger' style={{ width: '50%', height: '60px' }} variant="outlined">Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
