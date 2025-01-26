export function TextElement({
  variant,
  color = "black",
  children,
  numberOfLines,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`font-outfit ${onClick ? "cursor-pointer" : null} ${
        variant === "header"
          ? "text-4xl font-semibold"
          : variant === "subheader"
          ? "text-2xl font-medium"
          : variant === "body"
          ? "text-lg font-normal"
          : variant === "caption"
          ? "text-sm font-light"
          : null
      } `}
      style={{ color: color }}
      numberOfLines={numberOfLines}
    >
      {children}
    </div>
  );
}
