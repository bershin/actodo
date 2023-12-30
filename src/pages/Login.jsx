import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
function Login(props){
  const [inputUser, setinputUser] = useState("")
  const [inputPass, setinputPass] = useState("")
  const [regUser, setregUser] = useState(true)
  const navigate = useNavigate()
  const users = props.users
  var foundUser = false

  function handleUser(evt){
    setinputUser(evt.target.value)
  }

  function handlePass(evt){
    setinputPass(evt.target.value)
  }

  function checkUser(){
    users.forEach(function(item){
      if(item.user === inputUser && item.pass === inputPass){
        foundUser = true
        navigate("/landing",{state:{user:inputUser}})
      }
      if(foundUser == false){
        setregUser(false)
      }
    })
  }

  return(
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {regUser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-600">Please signup before you login</p>}
        <div className="flex flex-col my-2">
          <input type="text" onChange={handleUser} value={inputUser} className="w-52 border-black p-1 border rounded-md" placeholder="Username"></input><br/>
          <input type="text" onChange={handlePass} value={inputPass} className="w-52 border-black p-1 border rounded-md" placeholder="Password"></input><br/>
          <button onClick={checkUser} className="bg-[#8272DA] w-24 p-1 border rounded-md">Login</button>
          <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Login