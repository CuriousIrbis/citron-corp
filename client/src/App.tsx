import {Routes, Route} from 'react-router'
import MainLayout from './layout';
import Home from './components/pages/home'
import Append from './components/pages/append';

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