import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import auth from '../firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { setUser, user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)

            })
            .catch((error) => {
                console.log(error);

            });


    }


    console.log(user);



    return (
        <div className='flex flex-col  gap-5 justify-center items-center p-7'>


            <div className='bg-[#525CEB] text-center shadow-2xl p-5 md:p-15 rounded-full'>

                <div className='bg-linear-to-r from-cyan-300 via-white to-sky-400 bg-clip-text text-transparent'>
                    <a className="text-2xl lg:text-4xl font-bold">WinterPetCare</a>
                </div>

                <p className='text-white p-0 m-0 mt-5 text-lg'>don't have a account</p>

                <div className="text-lg lg:text-xl text-white font-bold underline">
                    <Link to={'/signup'}>Register now!</Link>
                </div>

            </div>

            <div className="card bg-[#dae3ee] w-[350px] md:w-[650px] md:p-8 shrink-0 shadow-2xl rounded-4xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">

                        <label className="label text-lg">Email</label>
                        <input name='email' type="email" className="input w-full py-6 text-lg rounded-full"
                            placeholder="Email" />

                        <label className="label text-lg">Password</label>
                        <input name='password' type="password" className="input w-full py-6 text-lg rounded-full" placeholder="Password" />


                        <div><a className="link link-hover text-lg">Forgot password?</a></div>

                        <button className="btn btn-neutral rounded-full bg-[#525CEB] mt-4 py-6 text-lg">Login</button>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;