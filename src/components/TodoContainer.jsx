import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import {useState} from "react"
function TodoContainer(){
  const [actArr, setActArr] = useState([{id:1,activity:"Go for a walk"},{id:2,activity:"Read book for 15 min"}])
  return(
    <div className="flex gap-5 flex-wrap">
      <AddTodoForm actArr={actArr} setActArr={setActArr}/>
      <TodoList actArr={actArr} setActArr={setActArr}/>
    </div>
  )
}
export default TodoContainer