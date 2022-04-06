import React from 'react'
import './auth.css'

function Login() {
    return (
        <div className="form">
            <h1 className="form_heading">Login</h1>
            <div className="input_box_div form_input grey_bg" id="textField">
                <div className="input_txt">
                    <label for="name" className="input_label">Enter your name:</label>
                </div>
                <input className="input_box" type="text" />
            </div>

            <div className="input_box_div form_input grey_bg" id="textField">
                <div className="input_txt">
                    <label for="name" className="input_label">Enter your email:</label>
                </div>
                <input className="input_box" type="email" />
            </div>

            <div className="credentials_options">
                <label className="">
                    <input type="checkbox" name="" value="Womens Wear" />
                    <span className="chechbox_text">Remember Me</span>
                </label>
                <a href="#" className="bold forgot_link">Forgot Password ?</a>
            </div>
            <button className="btn btn_primary btn_rounded btn_center"><a href="">Login</a></button>
            <p className="block"><a href="#">Create new account <img src="https://img.icons8.com/external-those-icons-fill-those-icons/12/ffffff/external-right-arrows-those-icons-fill-those-icons-3.png" />
            </a></p>
        </div>
    )
}

export { Login } 