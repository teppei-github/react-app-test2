export default function Box(Props) {
  return (
    <div style={{ width: "30%" }}>
      <img style={{ width: "100%" }} alt="" src={Props.imgsrc}></img>
      <button
        onClick={() =>
          alert("この絵は" + Props.message + "をイメージした絵です。")
        }
      >
        詳細を見る
      </button>
    </div>
  );
}
