interface DisplayObjectProps {
  data: unknown[];
}

export default function DisplayObject({ data }: DisplayObjectProps) {
  return (
    <div>
      {data.map((val, i) => (
        <p key={i}>{String(val)}</p>
      ))}
    </div>
  );
}
