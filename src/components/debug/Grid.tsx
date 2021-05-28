import("./Grid.scss");

interface GridProps {
  visible?: boolean;
}

function Grid({ visible = true }: GridProps) {
  visible
    ? document.body.classList.add("grid")
    : document.body.classList.remove("grid");

  if (!visible) {
    return null;
  }

  return (
    <div className="Grid">
      <div className="column">1</div>
      <div className="column">2</div>
      <div className="column">3</div>
      <div className="column">4</div>
      <div className="column">5</div>
      <div className="column">6</div>
      <div className="column">7</div>
      <div className="column">8</div>
    </div>
  );
}

export default Grid;
