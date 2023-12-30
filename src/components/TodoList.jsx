import TodoItem from "./TodoItem"
function TodoList(props){
  const actArr = props.actArr
  const setActArr = props.setActArr
  return(
    <div className="bg-[#BDB4EA] p-2 border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {actArr.length===0?<p>You haven't added anything yet.</p>:""}
      {actArr.map(function(item,index){
        return <TodoItem id={item.id} index={index} activity={item.activity} actArr={actArr} setActArr={setActArr}/>
      })}
    </div>
  )
}
export default TodoList