function TodoItem(props){
  const actArr = props.actArr
  const setActArr = props.setActArr
  function handleDelete(removeId){
    const tempArr = actArr.filter(function(act){
      return act.id != removeId
    })
    setActArr([...tempArr])
  }
  return(
    <div className="flex justify-between">
      <p>{props.index+1}. {props.activity}</p>
      <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
  )
}
export default TodoItem