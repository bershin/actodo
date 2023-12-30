function Card(props){
  return(
    <div style={{backgroundColor:props.bgcolor}} className="text-center border rounded-md py-5 px-10 flex-grow">
      <h2 className="text-2xl font-medium">{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  )
}
export default Card