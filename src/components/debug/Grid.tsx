interface GridProps {
  visible?: boolean;
}

function Grid({ visible = true }: GridProps) {
  if (!visible) return null;

  import("./Grid.scss");

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
