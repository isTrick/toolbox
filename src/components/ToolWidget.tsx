export default function ToolWidget(props) {
  return (
    <div>
      <h3>{props.toolName}</h3>
      <p>{props.toolDescription}</p>
      <a href={props.toolLink}></a>
    </div>
  )
}