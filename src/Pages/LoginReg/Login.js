import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,

    ] = useSignInWithEmailAndPassword(auth);

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dashboard/search';

    if (user) {
    }
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
            .then(() => {
                // navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
        if (user) {
            console.log(user)
        }
    }

    const googleSign = () => {
        signInWithGoogle()
            .then(() => {
                // navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <div className='text-center text-sm'>
                <h1 className='text-3xl font-bold my-6'>Log in</h1>
                <div className='w-1/2 mx-auto bg-orange-300 py-5 rounded-lg mb-8'>
                    <form onSubmit={handleSubmit}>


                        <input type="email" name="email" id="" placeholder='Enter your email' className='w-10/12 py-3 px-2 rounded-md mb-4 text-sm text-accent' /><br />
                        <input type="password" name="password" id="" placeholder='Enter a password' className='w-10/12 py-3 px-2 rounded-md mb-4 text-sm text-accent' /> <br />

                        <input type="submit" value="Login" className='py-3 w-1/2 bg-orange-600 text-white cursor-pointer rounded-lg' />
                    </form>
                </div>
                <p></p>
                <p className='my-3 text-sm'>Do you need an account ? Then <Link to="/register" className='font-bold text-orange-600'>Register</Link></p>
                <button className="btn btn-outline" onClick={googleSign}>Continue with Google</button>

            </div>
        </div>
    );
};

export default Login;