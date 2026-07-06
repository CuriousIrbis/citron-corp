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
    const [isFlipped, setFlipped] = useState(false);
    const [employeers, setEmployeers] = useState<Array<Employeer>>(Array<Employeer>);

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
                    <select name="" id="">
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