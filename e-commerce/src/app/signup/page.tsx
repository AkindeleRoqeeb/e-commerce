import Login from "../login/page";

function SignUp() {
    return (
        <div className="capitalize container grid justify-items-center gap-4">
            <div className="navigationArrow">
                {/* Back Arrow  */}
            </div>
            <h3 className="  text-blue-400 hover:text-lime-600 text-left" >
                sign up
            </h3>
            <form className="flex-col flex gap-3">
                <input placeholder="Full Name" type="text" name="full name" className=" flex border-double border-2 border-sky-500 text-black" />
                <input placeholder="email" type="email" className="" />
                <input placeholder="password" type="password" className="" />
            </form>
            <div>
                <span>
                    Already have an account //arrow
                </span>
            </div>

            <div>
                <button className="cursor-pointer 
                w-96 border border-3 
                bg-pink-800 
                text-white rounded-lg">sign up</button>
            </div>
            <div>
                <small>or sign up with social account</small>
                <div className="flex">
                    <button className="cursor-pointer border m-5" type="button">Google</button>
                    <button className="cursor-pointer border m-5" type="button">Facebook</button>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default SignUp;