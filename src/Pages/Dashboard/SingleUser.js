import React from 'react';

const SingleUser = ({ user }) => {
    const { name, email, pic, contact } = user;
    console.log(name)
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={pic} alt={name} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <p>{contact}</p>

                </div>
            </div>
        </div>
    );
};

export default SingleUser;