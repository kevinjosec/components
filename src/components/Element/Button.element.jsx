import { TextElement } from "./Text.element";

export function ButtonElement({
  onClick,
  paddingHorizontal,
  paddingVertical,
  borderWidth,
  borderColor,
  borderRadius,
  title,
  bgColor,
  titteColor,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
      }}
    >
      <TextElement variant="body" children={title} color={titteColor} />
    </div>
  );
}
