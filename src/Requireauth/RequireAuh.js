import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuh = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    if (loading) {
        return <Loading></Loading>
    }
    return children;
};

export default RequireAuh;