
export default function Login() {

    // function submit() {
    //     return(
    //         console.log("you have submit")
    //     )
    // }

    return (
        <div className="capitalize container grid justify-items-center gap-4">
            <div className="navigationArrow">
                {/* Back Arrow  */}
            </div>
            <h3 className=" text-blue-400 hover:text-lime-600 text-left" >
                login
            </h3>
            <form className="flex-col flex gap-3">
                <input type="email" className="" placeholder="email"/>
                <input type="password" className="" placeholder="password"/>
            </form>
            <div>
                <span>
                    foeget your password // arrow
                </span>
            </div>
                <button className="border border-3 border-solid">
                    Submit
                </button>
            <div>
                <button className="cursor-pointer 
                w-96 border border-3 
                bg-pink-800 
                text-white rounded-lg">sign up</button>
            </div>
            <div>
                <small>or login with social account</small>
                <div className="flex ">
                    <button className="m-4 p-3 cursor-pointer border" type="button">Google</button>
                    <button className="m-4 p-3 cursor-pointer border">Facebook</button>
                </div>
            </div>
            <div>
  
            </div>
        </div>
    )
}