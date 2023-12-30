import {useLocation} from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

function Landing(){
  const data = useLocation()
  return (
    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user}/>
        {/* Card */}
        <div className="flex flex-wrap gap-7 my-5">
          <Card bgcolor="#8272DA" title="23" subtitle="Chennai"/>
          <Card bgcolor="#FD6663" title="20 December" subtitle="14:02"/>
          <Card bgcolor="#FCA201" title="Built using" subtitle="React"/>
        </div>
        {/* Todo container */}
        <TodoContainer/>
      </div>
    </div>
  );
}
export default Landing