type Props<T> = {
  value: T;
};
const bgMap = {
  red: "bg-red-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
};
type BgKey = keyof typeof bgMap;
export default function Dynamicstyle<T>({ value }: Props<T>) {
  return (
    <>
      {/* inline style  */}
      {typeof value === "number" && (
        <div
          style={{
            width: value,
            color: value > 3 ? "orange" : "red",
            background: "red",
          }}
        >
          Dynamicstyle
        </div>
      )}
      {/*class name*/}
      {typeof value === "string" && (
        <div className={bgMap[value as BgKey] ? bgMap[value as BgKey] : "red"}>
          {value}
        </div>
      )}
    </>
  );
}
