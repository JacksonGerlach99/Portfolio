import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Tbar from "../Tbar"
const Layout = () => {
    return <>
    <div className='App'>
        <Sidebar/>
        <Tbar/>

        <div className='page'></div>

        <Outlet/>

    </div>
    </>
}

export default Layout