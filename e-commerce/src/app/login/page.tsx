
export default function Login() {
    // function submit() {
    //     return(
    //         console.log("you have submit")
    //     )
    // }
    return(
        <div>
            <h3 className="text-white-700" >sign up</h3>
            <form>
                <input type="text" name="full name" className="border-dotted border-2 border-sky-500 text-black" />
                <input type="email" className="" />
                <input type="password" className="" />
                <input type="" className="" />
            </form>
            <div>
                <span>
                    Already have an account //arrow
                </span>
            </div>

            <div>
                <button className="">sign up</button>
            </div>
            <div>
                <small>or sign up with social account</small>
                <div>
                    <button className="" type="button">Google</button>
                    <button className="">Facebook</button>
                </div>
            </div>
      </div>
    )
}