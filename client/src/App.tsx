import {Routes, Route} from 'react-router'
import MainLayout from './layout';
import Home from './pages/home'
import Append from './pages/append';

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />}/>
        <Route path='append' element={<Append />}/>
      </Route>
    </Routes>
  )
}