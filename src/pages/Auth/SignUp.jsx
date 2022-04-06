import React from 'react'
import './auth.css'

function SignUp() {
    return (
        <div className="form">
            <h1 className="form_heading">SignUp</h1>
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

            <label className="center_txt">
                <input type="checkbox" name="" value="Remember Me" />
                <span className="chechbox_text">Always Remember Me</span>
            </label>

            <button className="btn btn_primary btn_rounded btn_center"><a href="">Sign Up</a></button>
            <p className="block"><a href="#">Already have an account <img src="https://img.icons8.com/external-those-icons-fill-those-icons/12/ffffff/external-right-arrows-those-icons-fill-those-icons-3.png" />
            </a></p>
        </div>
    )
}

export { SignUp } 