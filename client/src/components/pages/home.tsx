import axios from 'axios'
import {useEffect, useState} from 'react'

import type Employeer from '../interfaces/employeer'

export default function Home(){
    const [employeers, setEmployeers] = useState<Array<Employeer>>(Array<Employeer>);

    async function get_employeers(){
        const usersData = await axios.get('http://localhost:3000/api/users');
        setEmployeers(usersData.data);
    }

    const makeEmployeers = (employeers: Array<Employeer>) => {
        if(employeers.length === 0) {
            return (
                <h2 className='employeer'>
                    Сотрудников нет
                </h2>
            );
        } else{
            for(let employer of employeers){
                return (
                    <div className='employeer'> 
                        <div className='full-name'>
                            <div>{employer.name}</div>
                            <div>{employer.surname}</div>
                            <div>{employer.secondname}</div>
                        </div>
                        <div>{employer.position}</div>
                        <div>{employer.salary}</div>
                        <div>{employer.comingyear}</div>
                    </div>
                )
            }
        }
        
    } 

    useEffect(() => {
        get_employeers()
        makeEmployeers(employeers)
    }, [])

    return (
        <div className='home'>
            <section className='home-list'>
                {makeEmployeers(employeers)}
            </section>
            <section className='home-sort'></section>
        </div>
    )
}