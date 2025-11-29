import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    console.log(user);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenForm = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='flex flex-col justify-center items-center space-y-2 my-15'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>

            <p className='font-bold text-2xl m-0'>{user?.displayName}</p>
            <p className='text-xl'>{user?.email}</p>
            <button onClick={handleOpenForm} className="btn btn-primary bg-[#525CEB] text-xl">Update Profile</button>

            {
                isOpen && (
                    <div className="card  w-[350px] md:w-[650px] md:p-8 shrink-0 rounded-xl">
                        <div className="card-body">
                            <form className="fieldset">

                                <label className="label text-lg">Name</label>
                                <input defaultValue={user?.displayName} name='name' type="text" className="input w-full py-6 text-lg rounded-full" placeholder="Your Name" />

                                <label className="label text-lg">PhotoUrl</label>
                                <input defaultValue={user?.photoURL} name='photoUrl' type="text" className="input w-full py-6 text-lg rounded-full" placeholder="Photo Url" />

                                <button className="btn btn-neutral rounded-2xl bg-[#525CEB] mt-6 py-6 text-lg">Update Now</button>


                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Profile;