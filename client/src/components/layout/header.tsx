import { NavLink } from 'react-router';
import Logo from '../../assets/svg/Logo.svg'
import '../../style/header.scss'

export default function Header(){
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <div className='text-logo'>
                    <h2>CITS</h2>
                    <p>Center of Innovative Technological Solutions</p>
                </div>
            </div>
            <div className="bttns">
                <NavLink to={'/'}>Посмотреть сотрудников</NavLink>
                <NavLink to={'/append'}>Добавить сотрудника</NavLink>
                <NavLink to={'/delete'}>Уволить сотрудника</NavLink>
            </div>
        </header>
    )
}