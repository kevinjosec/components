export function DividerElement({ thickness }) {
  return (
    <div
      className={` ${
        thickness === "large" ? "p-10" : thickness === "medium" ? "p-5" : "p-2"
      } `}
    />
  );
}
