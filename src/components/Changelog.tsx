export const Changelog = () => {
  return (
    <div id="changelog" className="content-container">
      <h2 className="content-title">CHANGELOG</h2>
      <div className="changelog-item">
        <h3>1.2.0</h3>
        <h2>Feature</h2>
        <p>Other changes</p>
        <div>
          {["change1", "change2"].map((c) => {
            return <div key={c}>{c}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
