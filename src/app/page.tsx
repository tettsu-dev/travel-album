import JapanMap from "./components/JapanMap";

export default function Page() {
  return (
    <div style={{justifyContent: "center",alignItems: "center", display: "flex", flexDirection: "column"}}>
      <h1>Japan Map Page</h1>
      <JapanMap />
    </div>
  );
}