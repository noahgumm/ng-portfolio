import profile from "../data/profile.js";
import "../styles/Intro.css";

export default function TechStrip() {
  const items = profile.skills.slice(0, 2).flatMap((g) => g.items);
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div className="strip" aria-label={`Technologies: ${items.join(", ")}`}>
      <div className="strip-track" aria-hidden="true">
        {loop.map((item, i) => (
          <span key={i} className="strip-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
