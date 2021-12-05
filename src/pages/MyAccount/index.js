import React from "react";
import { Outlet, Link } from 'react-router-dom';

const MyAccount = () => {
    return(
        <div>
            <h1>Account page</h1>
            <Link to='download'>downloads</Link>
            <Outlet />
        </div>
    )
}

export default MyAccount;