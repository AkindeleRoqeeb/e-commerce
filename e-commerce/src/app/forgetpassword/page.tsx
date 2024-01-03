export default function Forgetpassword() {
    return(
        <div>
            <h3 className="text-">
                forget password
            </h3>
            <div className="">
                <p>
                    please enter you email. address. you will receive a
                    link to create a new password via email.
                </p>
                <input placeholder="" type="text" className="" />
                <span id="error">not a valid email address. your@gmail.com</span>
            </div>
            <button>send</button>
        </div>
    )
}