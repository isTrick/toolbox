import { ToolWidgetProps } from "@/src/types/tool"
import { widgetStyle } from "@/src/assets/styles/globalStyles"
import Image from "next/image"

export default function ToolWidget(props: ToolWidgetProps) {
  return (
    <div className={widgetStyle}>
      <Image src={props.toolIcon} width="100" height="100" alt={`${props.toolName} Icon`} />
      <h3>{props.toolName}</h3>
      <p>{props.toolDescription}</p>
      <a className="border-neutral-600 bg-white border p-2 rounded w-fit text-black" href={props.toolLink}>Use {props.toolName}</a>
    </div>
  )
}