import React from 'react'
import './auth.css'
import { Link } from "react-router-dom";

function Logout() {
    return (
        <div className="form">
            <h1 className="form_heading">Log-out</h1>

            <h1 className='center_txt'>We are sad to see you go : (</h1>

            <label className="center_txt">
                <input type="checkbox" name="Remeber Me" value="Remember Me" />
                <span className="chechbox_text">Always Remember Me</span>
            </label>

            <button className="btn btn_primary btn_rounded btn_center"><a href="">Logout</a></button>
            <p className="block"><img src="https://img.icons8.com/external-those-icons-fill-those-icons/12/ffffff/external-left-arrows-those-icons-fill-those-icons-4.png" /> <Link to="/login">Take me to login page</Link></p>
        </div >
    )
}

export { Logout } 