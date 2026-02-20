
import { Scissors, Sparkles, Brush } from "lucide-react";
import "../styles/services.css";

function Services() {

  return (
    <section id="services" className="services">
      <div className="container">
        
        <h2>Shërbimet Tona</h2>

        <div className="services-grid">

          <div className="service-card">
            <Scissors size={40} />

            <h3>Prerje & Rruajtje</h3>

            <ul>
              <li>Qethje</li>
              <li>Rruajtje koke me brisk</li>
              <li>Rruajtje mjekre me brisk</li>
              <li>Rruajtje mjekre me makinë</li>
              <li>Rregullim mjekre me model</li>
            </ul>
          </div>

          <div className="service-card">
            <Sparkles size={40} />

            <h3>Kujdes për Fytyrën</h3>

            <ul>
              <li>Pastrim me fije</li>
              <li>Pastrim me dyll</li>
              <li>Maskë fytyre</li>
              <li>Trajtim fytyre</li>
            </ul>
          </div>

          <div className="service-card">
            <Brush size={40} />

            <h3>Shërbime Shtesë</h3>

            <ul>
              <li>Larje koke</li>
              <li>Lyerje mjekre</li>
              <li>Lyerje flokësh</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );

}

export default Services;

