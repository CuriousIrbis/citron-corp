import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router";

import '../../style/pages/delete.scss';

interface User{
    id: number;
    name: string,
    surname: string,
    secondname: string,
    post: string,
    salary: string,
    comingYear: string
}

export default function Delete(){
    const [findUsser, setFindUser] = useState('');
    const [users, setUsers] = useState<Array<User>>([]);
    const navigate = useNavigate()

    // блок с получением и отправкой данных на сервер

    // получаем пользователей
    async function getUsers(){
        try{
            const userData = await axios.get('http://localhost:3000/api/users');
            setUsers(userData.data);
        } catch(err){
            console.error(err);
        }
    }

    // удаляем пользователей
    async function handleDismissEmployeer(userId: number){
        const submit = confirm("Вы уверены?");

        if(submit){
            try{
                const result = await axios.delete("http://localhost:3000/api/users", {
                    data:{
                        userid: userId
                    }
                });

                alert(result.data.msg);
                navigate('/')
            } catch(err: unknown){
                if(err instanceof AxiosError)
                    console.error(`Ошибка при отправке данных: ${err}`);
                else
                    console.error(`Внутренняя ошибка клиента: ${err}`);
            }
            // удовлетворительно
        }
    }
    //конец блока


    // блок с поисковой строкой
    
    const filtredUsers = users.filter((user: User) => {
        const fullname = `${user.surname} ${user.name} ${user.secondname}`.toLocaleLowerCase();
        const searchString = findUsser.toLocaleLowerCase().trim();

        return fullname.includes(searchString)
    })

    function findUser(ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setFindUser(ev.target.value);
    }
    // конец блока

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="delete">
            <input 
                className="input"
                type="text" 
                value={findUsser} 
                onChange={(ev) => findUser(ev)}
                placeholder="Введите имя..."
            />

            <ul>
                <div className="data">
                    <div>ФИО</div>
                    <div>Зарплата</div>
                </div>
                {filtredUsers.length > 0 ? (
                    filtredUsers.map((user: User) => (
                        <li key={user.id} className="employeer-frame" >
                            <div className="employeer" >
                                <div className='full-name'>
                                    <span>{user.surname}</span><span>{user.name}</span><span>{user.secondname}</span>
                                </div>
                                <div>{user.salary}</div>
                            </div>
                            <div className="delete-employeer">
                                <button onClick={(ev) => {
                                    ev.stopPropagation();
                                    handleDismissEmployeer(user.id);
                                }}>
                                    Уволить
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="non-employeer">Сотрудников нет</li>
                )}
            </ul>
        </div>
    )
}