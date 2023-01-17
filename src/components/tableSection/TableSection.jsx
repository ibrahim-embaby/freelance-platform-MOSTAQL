import "./tableSection.css";

function TableSection({ title, children }) {
  return (
    <div className="tableSection">
      <div className="tableSectionTop">{title}</div>
      {children}
    </div>
  );
}

export default TableSection;
