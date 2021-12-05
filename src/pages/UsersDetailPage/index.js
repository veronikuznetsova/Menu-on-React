import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { usersList } from 'components/Content/components/Users'

const UsersDetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const newUser = usersList.find(user => user.id == id);
        setUser(newUser)
    }, []);

    return (
        <div>detail page of {id} {user.name}</div>
    )
}

export default UsersDetailPage;