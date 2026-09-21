import { Icon } from "./HomeIcons";

const skillIcons = {
  Vocabulary: "Aa",
  Grammar: "message",
  Reading: "book",
  Writing: "pencil",
  Listening: "headphones",
};

export default function ProgressOverview({ overallProgress, skillProgress, loading }) {
  const displayOverall = loading ? 0 : overallProgress;

  return (
    <section className="progress-overview" id="progress-overview">
      <div className="progress-overview__intro">
        <div className="progress-overview__heading">
          <span className="progress-heading-icon"><Icon name="progress" size={23} /></span>
          <div><h2>My Progress</h2><p>You’re doing great! Keep it up!</p></div>
        </div>
      </div>

      <div className="overall-progress-block">
        <div className="overall-progress-block__label"><span>Overall Progress</span><strong>{loading ? "–" : `${displayOverall}%`}</strong></div>
        <div className="home-progress-track"><span style={{ width: `${displayOverall}%` }} /></div>
      </div>

      <div className="skill-progress-list">
        {Object.entries(skillProgress).map(([name, percent]) => (
          <div className="skill-progress-item" key={name}>
            <span className={`skill-progress-item__icon is-${name.toLowerCase()}`}>
              {skillIcons[name] === "Aa" ? <b>Aa</b> : <Icon name={skillIcons[name]} size={22} />}
            </span>
            <span><small>{name}</small><strong>{loading ? "–" : `${percent}%`}</strong></span>
          </div>
        ))}
      </div>

      <button type="button" className="progress-details-button" onClick={() => document.getElementById("learning-library")?.scrollIntoView({ behavior: "smooth" })}>
        View detailed progress <Icon name="chevronRight" size={18} />
      </button>
    </section>
  );
}
