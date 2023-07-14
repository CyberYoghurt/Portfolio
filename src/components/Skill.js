export default function Skill({ skill, description, icon }) {
  return (
    <div className="skill">
      <div className="skill__side skill__side--front">
        <img alt={`${skill} logo`} className="skill__img" src={icon} />
      </div>
      <div className="skill__side skill__side--back ">
        <h3 className="skill__name">{skill}</h3>
        <div className="skill__description">{description}</div>
      </div>
    </div>
  );
}
