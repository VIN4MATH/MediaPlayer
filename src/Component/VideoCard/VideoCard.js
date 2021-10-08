import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'

export default function VideoCard({user}) {
    return (
        <div className="card-items">
            <div className="video-section">
                {user.id} Name:-{user.name}
            </div>

            <div className="card-btns">
                <button className="Like-Button">
                    {" "}
                    {user.id} <BiLike />
                </button>
                <p> Name{user.address.street}</p>

                <button className="Dislike-Button">
                    {user.id} <BiDislike />{" "}
                </button>
            </div>
        </div>
    )
}
