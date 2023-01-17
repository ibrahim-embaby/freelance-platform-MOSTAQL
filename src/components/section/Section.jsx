import "./section.css";

function Section({ title, children }) {
  return (
    <div className="section">
      <div className="sectionTop">{title}</div>
      <div className="sectionBottom">{children}</div>
    </div>
  );
}

export default Section;
