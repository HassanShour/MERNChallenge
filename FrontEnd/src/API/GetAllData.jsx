import {useEffect, useState} from "react";


const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {name, phone, address,id,_id} = curUser;
                    return (
                        <tr key={id}>
                            <td>{_id}</td>
                            <td>{name}</td>
                            <td>{phone}</td>
                            <td>{address}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}


const API = "http://localhost:3030/get";

const GetAllData = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </>
}

export default GetAllData;

