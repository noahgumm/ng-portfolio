import profile from "../data/profile.js";
import useReveal from "../hooks/useReveal.js";
import "../styles/About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">01 / About</p>
        <div className="about-grid reveal" ref={ref}>
          <div>
            <h2 className="section-title">Curious by default.</h2>
            {profile.bio.map((p, i) => (
              <p key={i} className="about-text">
                {p}
              </p>
            ))}

            <h3 className="about-sub">Background</h3>
            <ul className="timeline">
              {profile.background.map((b) => (
                <li key={b.title + b.place}>
                  <span className="tl-title">{b.title}</span>
                  <span className="tl-place">{b.place}</span>
                  <span className="tl-when">{b.when}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills">
            {profile.skills.map((g) => (
              <div key={g.group} className="skill-group">
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
