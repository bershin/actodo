import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"

function Signup(props){
  const [signUser,setsignUser] = useState("")
  const [signPass,setsignPass] = useState("")
  const [signConPass,setsignConPass] = useState("")
  const setusers = props.setusers
  const users = props.users
  const navigate = useNavigate()

  function handleUser(evt){
    setsignUser(evt.target.value)
  }

  function handlePass(evt){
    setsignPass(evt.target.value)
  }

  function handleConPass(evt){
    setsignConPass(evt.target.value)
  }

  function handleSignup(){
    if(signPass === signConPass){
      setusers([...users,{user:signUser,pass:signPass}])
      navigate("/")
    }
  }

  return(
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Sign up here :)</p>
        <div className="flex flex-col my-2">
          <input onChange={handleUser} value={signUser} type="text" className="w-52 border-black p-1 border rounded-md" placeholder="Username"></input><br/>
          <input onChange={handlePass} value={signPass} type="text" className="w-52 border-black p-1 border rounded-md" placeholder="Password"></input><br/>
          <input onChange={handleConPass} value={signConPass} type="text" className="w-52 border-black p-1 border rounded-md" placeholder="Confirm Password"></input><br/>
          <button onClick={handleSignup} className="bg-[#FCA201] w-24 p-1 border rounded-md">Signup</button>
          <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Signup