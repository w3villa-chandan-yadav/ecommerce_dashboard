import { useState } from 'react'

import './App.css'
import Main from './component/Main'
import {Routes,Route} from "react-router-dom"
import Calander from './component/Calander'
import Change from './component/Change'
import Forms from './component/OutletScreen/Forms'

function App() {
  const [count, setCount] = useState(0)



  return (
 <>
 <Routes>
  <Route exact path='/' element={<Main/>}>
  <Route index element={<Change/>}/>
  <Route path='/:name' element={<Calander/>} />
  <Route path='/indexs/:id' element={<Forms/>}/>
  </Route>
 </Routes>
  </>
  )
}

export default App
