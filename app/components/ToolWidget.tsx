interface ToolWidgetProps {
  toolIcon: string;
  toolName: string;
  toolDescription: string;
  toolLink: string;
}

export default function ToolWidget(props: ToolWidgetProps) {
  return (
    <div>
      <img src={props.toolIcon} width="100" alt="{props.toolName} Icon" />
      <h3>{props.toolName}</h3>
      <p>{props.toolDescription}</p>
      <a href={props.toolLink}></a>
    </div>
  )
}