import { useState } from 'react'

import './App.css'
import Main from './component/Main'
import {Routes,Route} from "react-router-dom"
import Calander from './component/Calander'
import Change from './component/Change'
import Forms from './component/OutletScreen/Forms'
import Login from './component/SeveralForm/Login'
import Ourbackend from './component/SeveralForm/Ourbackend'

function App() {
  const [count, setCount] = useState(0)



  return (
 <>
 <Routes>
  <Route exact path='/' element={<Main/>}>
  <Route index element={<Change/>}/>
  <Route path='/:name' element={<Calander/>} />
  <Route path='/indexs/Company' element={<Forms/>}/>
  <Route path='/indexs/User' element={<Login/>}/>
  <Route path='/indexs/OurBackend' element={<Ourbackend/>}/>

  <Route path='/indexs/:name' element={<Calander/>}/>
  </Route>

  <Route path='/logni' element={<Login/>}/>
    

 

 </Routes>
  </>
  )
}

export default App
