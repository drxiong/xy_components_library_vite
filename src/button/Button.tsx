import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type IIcon =
  | "search"
  | "edit"
  | "check"
  | "message"
  | "star-off"
  | "delete"
  | "add"
  | "share";
export type ISize = "small" | "medium" | "large";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  icon: {
    type: String,
    default: "",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
} as const;

export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => (
      <button
        class={`
        py-${size[props.size].y}
        px-${size[props.size].x} 
        mx-1
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-${props.color}-500 
        hover:bg-${props.color}-700 
        border-none 
        cursor-pointer 
        `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
