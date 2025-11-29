import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { FcGoogle } from "react-icons/fc";


const Register = () => {

    const { registerWithEmailPassword, setUser, user, handleGoogleSignin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        console.log(name, photoUrl);


        registerWithEmailPassword(email, pass)
            .then((userCredential) => {

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    setUser(userCredential.user)
                }).catch((error) => {
                    console.log(error)
                });


            }).catch(err => {
                console.log(err);

            })

    }

    console.log(user)


    const googleSignup = () => {
        handleGoogleSignin()
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='flex flex-col  gap-5 justify-center items-center p-7'>


                <div className='bg-[#525CEB] text-center shadow-2xl p-5 md:px-15 md:py-10 rounded-t-full rounded-b-3xl'>
                    <div className='bg-linear-to-r from-cyan-300 via-white to-sky-400 bg-clip-text text-transparent'>
                        <a className="text-2xl lg:text-4xl font-bold">WinterPetCare</a>
                    </div>

                </div>

                <div className="card bg-[#dae3ee] w-[350px] md:w-[650px] md:p-8 shrink-0 shadow-2xl rounded-4xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="fieldset">

                            <label className="label text-lg">Name</label>
                            <input name='name' type="text" className="input w-full py-6 text-lg rounded-full" placeholder="Your Name" />

                            <label className="label text-lg">PhotoUrl</label>
                            <input name='photoUrl' type="text" className="input w-full py-6 text-lg rounded-full" placeholder="Photo Url" />

                            <label className="label text-lg">Email</label>
                            <input name='email' type="email" className="input w-full py-6 text-lg rounded-full" placeholder="Email" />

                            <label className="label text-lg">Password</label>
                            <input name='password' type="password" className="input w-full py-6 text-lg rounded-full" placeholder="Password" />

                            <button className="btn btn-neutral rounded-xl bg-[#525CEB] mt-4 py-6 text-lg">Register</button>

                            <p className='text-base mt-2'>Sign up With... </p>

                            <button onClick={googleSignup} className="btn py-6 text-lg text-gray-500 rounded-full"><FcGoogle />Google </button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;