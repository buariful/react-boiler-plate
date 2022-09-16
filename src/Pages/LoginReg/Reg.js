import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Reg = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/dashboard';

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleSubmit = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/dashboard')
    }

    const googleSign = () => {
        signInWithGoogle()
            .then(() => {
                // navigate(from, { replace: true })
                navigate(from, { replace: true })
            })
    }
    const [dateuser] = useAuthState(auth);
    const navigate = useNavigate();
    if (dateuser) {
        navigate('/home')
    }
    return (
        <div>
            <div className='text-center text-sm text-accent'>
                <h1 className='text-3xl font-bold my-6'>Please Sign up first</h1>
                <div className='w-1/2 mx-auto bg-orange-300 py-5 rounded-lg mb-8'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="" placeholder='Enter your Name' className='w-10/12 py-3 px-2 rounded-md mb-4' required /><br />

                        <input type="email" name="email" id="" placeholder='Enter a email' className='w-10/12 py-3 px-2 rounded-md mb-4' required /> <br />

                        <input type="password" name="password" required id="" placeholder='Your password' className='w-10/12 py-3 px-2 rounded-md mb-4' /> <br />

                        <input type="submit" value="Signup" className='py-3 w-1/2 bg-orange-600 text-white cursor-pointer rounded-lg' required />
                    </form>
                </div>
                <p className='font-bold text-red-700'></p>
                <p className='my-3 '>Already have an account ? Then <Link to="/login" className='font-bold text-orange-600'>Login</Link></p>

                <button className="btn btn-outline" onClick={googleSign}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Reg;