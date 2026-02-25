import aboutImg from "../assets/images/gallery1.1.webp";
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

          <p>
            Gjithashtu, në ambientet tona zhvillohen trajnime praktike për të rinjtë 
            që duan të mësojnë artin e berberisë dhe të ndërtojnë karrierën e tyre në këtë profesion.
          </p>

          <div className="training-cta">
             <a href="https://wa.me/355697258558?text=Pershendetje,%20jam%20i%20interesuar%20per%20trajnimet%20praktike."
             target="_blank"
             rel="noopener noreferrer"
             className="training-btn"
             >
              Merr informacion për trajnim
             </a>
          </div>

        </div>

        <div className="about-image">
          <img src={aboutImg} alt="Pamje e barber shop" loading="lazy"/>
        </div>


      </div>
    </section>
  );

}

export default About;
