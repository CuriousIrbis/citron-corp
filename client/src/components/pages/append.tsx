import { useState } from 'react'
import '../../style/pages/append.scss'
import axios from 'axios'
import { useNavigate } from 'react-router'

export default function Append(){

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [secondname, setSecondname] = useState('')
    const [post, setPost] = useState('')
    const [salary, setSalary] = useState('')
    const [comingYear, setComingYear] = useState('')

    async function handleSendEmployeer(){

        try{
            const data = await axios.post('http://localhost:3000/api/users/', {
                name: name,
                surname: surname,
                secondname: secondname,
                position: post,
                salary: salary,
                comingYear: comingYear
            });

            alert(data)

            if(data.status >= 200 && data.status <= 300){
                alert('Успешно записан')
                navigate('/')
            }
        } catch(err){
            console.error(err)
        }
    }

    return (
        <div className="append">
            <h2>Данные сотрудника</h2>
            
            <form onSubmit={() => handleSendEmployeer()}>
                <div className='person-info'>
                    <div className='NSS'>
                        <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} placeholder='Имя'/>
                        <input type="text" value={surname} onChange={(ev) => setSurname(ev.target.value)} placeholder='Фамилия'/>
                        <input type="text" value={secondname} onChange={(ev) => setSecondname(ev.target.value)} placeholder='Отчество'/>
                    </div>
                    <div className='Work'>
                        <input type="text" value={post} onChange={(ev) => setPost(ev.target.value)} placeholder='Должность'/>
                        <input type='number' value={salary} onChange={(ev) => setSalary(ev.target.value)} placeholder='Зарплата'/>
                        <input type="number" value={comingYear} onChange={(ev) => setComingYear(ev.target.value)} placeholder='Год поступления'/>                     
                    </div>                    
                </div>
                <button type='submit' > Добавить сотрудника </button>
            </form>
        </div>
    )
}