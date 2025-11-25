import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex flex-col  gap-5 justify-center items-center p-7'>


            <div className='bg-[#525CEB] text-center shadow-2xl p-5 md:p-15 rounded-full'>
                <div className='bg-linear-to-r from-cyan-300 via-white to-sky-400 bg-clip-text text-transparent'>
                    <a className="text-3xl lg:text-5xl font-bold">WinterPetCare</a>
                </div>
                <p className='text-white p-0 m-0 mt-5 text-lg'>don't have a account</p>
                <div className="text-2xl lg:text-3xl text-white font-bold underline"> <Link to={'/signup'}>Register now!</Link> </div>
            </div>

            <div className="card bg-[#dae3ee] w-[350px] md:w-[650px] md:p-8 shrink-0 shadow-2xl rounded-4xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label text-lg">Email</label>
                        <input type="email" className="input w-full py-6 text-lg rounded-full" placeholder="Email" />
                        <label className="label text-lg">Password</label>
                        <input type="password" className="input w-full py-6 text-lg rounded-full" placeholder="Password" />
                        <div><a className="link link-hover text-lg">Forgot password?</a></div>
                        <button className="btn btn-neutral rounded-full bg-[#525CEB] mt-4 py-6 text-lg">Login</button>
                    </fieldset>
                </div>
            </div>

        </div>
    );
};

export default Login;