function App() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const clear = () => {
    setAnswer(0);
    setExpression("");
  };
  const backSpace = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };
  return (
    <div className="container">
      <div className="grid">
        <div className="dis" id="display">
          <input
            type="text"
            className="expression"
            value={expression}
            placeholder="123"
            disabled
          />
          <div className="total">{answer}</div>
        </div>
        <div onClick={clear} id="clear" className="padButton AC bg-danger">
          AC
        </div>
        <div onClick={backSpace} className="padButton C bg-warning">
          C
        </div>
        <div onClick={() => display("/")} id="divide" className="padButton div">
          /
        </div>
        <div
          onClick={() => display("*")}
          id="multiply"
          className="padButton times"
        >
          X
        </div>
        <div
          onClick={() => display("7")}
          id="seven"
          className="padButton seven"
        >
          7
        </div>
        <div
          onClick={() => display("8")}
          id="eight"
          className="padButton eight"
        >
          8
        </div>
        <div onClick={() => display("9")} id="nine" className="padButton nine">
          9
        </div>
        <div
          onClick={() => display("-")}
          id="subtract"
          className="padButton sub"
        >
          -
        </div>
        <div onClick={() => display("4")} id="four" className="padButton four">
          4
        </div>
        <div onClick={() => display("5")} id="five" className="padButton five">
          5
        </div>
        <div onClick={() => display("6")} id="six" className="padButton six">
          6
        </div>
        <div onClick={() => display("+")} id="add" className="padButton plus">
          +
        </div>
        <div onClick={() => display("1")} id="one" className="padButton one">
          1
        </div>
        <div onClick={() => display("2")} id="two" className="padButton two">
          2
        </div>
        <div
          onClick={() => display("3")}
          id="three"
          className="padButton three"
        >
          3
        </div>
        <div onClick={() => display("0")} id="zero" className="padButton zero">
          0
        </div>
        <div
          onClick={() => display(".")}
          id="decimal"
          className="padButton dot"
        >
          .
        </div>
        <div
          onClick={calculate}
          id="equals"
          className="padButton equal bg-info"
        >
          =
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
