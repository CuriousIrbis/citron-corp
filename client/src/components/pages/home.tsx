import axios from 'axios'
import {useEffect, useState} from 'react'

import type Employeer from '../interfaces/employeer'

import SortBtn from '../../assets/svg/Сортировка вверх-вниз.svg';

import '../../style/pages/home.scss'

const selectOptions = [
    "Имя",
    "Должность",
    "Зарплата",
    "Год поступления"
]

const sortOptions = () => {
    return selectOptions.map((value: string, index: number) => <option key={index} value={value}>{value}</option>);
}

export default function Home(){
    const [isFlipped, setFlipped] = useState(true);
    const [employeers, setEmployeers] = useState<Array<Employeer>>(Array<Employeer>);
    const [option, setOption] = useState('Имя');
    
    async function get_employeers(){
        const usersData = await axios.get('http://localhost:3000/api/users/');
        setEmployeers(usersData.data);
    }

    const handleMakeEmployeers = (employeers: Array<Employeer>) => {
        if(employeers.length === 0) {
            return (
                <h2>
                    Сотрудников нет
                </h2>
            );
        } else{
            return employeers.map((employer) => {
                return(
                    <div className='employeer'> 
                         <div className='full-name'>
                            <span>{employer.surname} {employer.name}</span> <span>{employer.secondname}</span>
                         </div>
                         <div>{employer.position}</div>
                         <div>{employer.salary}</div>
                         <div>{employer.comingyear}</div>
                     </div>
                )
            })
        }
        
    }

    function handleFlip(){
        setFlipped(!isFlipped);

        switch (option) {
            case 'Имя':
                if(isFlipped){
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer1.name.localeCompare(employeer2.name));
                } else {
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer2.name.localeCompare(employeer1.name));
                }
                break;
            case 'Должность':
                if(isFlipped){
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer1.position.localeCompare(employeer2.position));
                } else {
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer2.position.localeCompare(employeer1.position));
                }
                break;
            case 'Зарплата':
                if(isFlipped){
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer1.salary - employeer2.salary);
                } else {
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer2.salary - employeer1.salary);
                }
                break;
            case 'Год поступления':
                if(isFlipped){
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer1.comingyear - employeer2.comingyear);
                } else {
                    employeers.sort((employeer1: Employeer, employeer2: Employeer) => employeer2.comingyear - employeer1.comingyear);
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        get_employeers()
        handleMakeEmployeers(employeers)
    }, [])

    return (
        <div className='home'>
            <section className={employeers.length == 0 ? '' : 'home-list'}>
                {handleMakeEmployeers(employeers)}
            </section>
            <section className='home-sort'>
                <div className='sorted-class'>
                    <h2>Отсортировать сотрудников</h2>
                    <select value={option} onChange={(ev) => setOption(ev.target.value)}>
                        {sortOptions()}
                    </select>
                </div>
                <img 
                    src={SortBtn}
                    onClick={() => handleFlip()}
                    style={{
                        transform: isFlipped ? 'rotate(180deg)': 'rotate(0deg)',
                        transition: 'ease-in-out .3s'
                    }}
                />
            </section>
        </div>
    )
}