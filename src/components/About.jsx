import aboutImg from "../assets/images/gallery1.webp";

import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-content">

        <div className="about-text">

        <h2>Rreth Nesh</h2>

          <p>
            Me eksperiencë dhe përkushtim ndaj çdo detaji, ofrojmë shërbime
            profesionale për meshkuj në Elbasan. Çdo prerje realizohet me
            kujdes maksimal dhe stil të personalizuar.
          </p>

          <p>
            Ambient modern, higjienë e lartë dhe atmosferë mikpritëse – për
            një eksperiencë të plotë dhe cilësore çdo herë që na vizitoni.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Ambient modern berber shop në Elbasan" loading="lazy"/>
        </div>

      </div>
    </section>
  );
}

export default About;
