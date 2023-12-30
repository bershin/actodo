import {useState} from "react"
function AddTodoForm(props){
  const actArr = props.actArr
  const setActArr = props.setActArr
  const [newAct, setnewAct] = useState("")

  function handleChange(evt){
    setnewAct(evt.target.value)
  }

  function handleAdd(){
    setActArr([...actArr,{id:actArr.length+1,activity:newAct}])
    setnewAct("")
  }
  
  return(
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input value={newAct} onChange={handleChange} className="p-1 border border-b-black" placeholder="Next Activity?"></input>
        <button onClick={handleAdd} className="bg-black text-white p-1">Add</button>
      </div>
    </div>
  )
}
export default AddTodoForm