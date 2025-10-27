import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const coutriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {

  return (
    <>
      <Suspense fallback={<p>Nadir vai loading</p>}>
        <Countries coutriesPromise={coutriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
