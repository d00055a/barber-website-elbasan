import img1 from "../assets/images/gallery1.webp";
import img2 from "../assets/images/gallery2.webp";
import img3 from "../assets/images/gallery3.webp";
import img4 from "../assets/images/gallery4.webp";
import img5 from "../assets/images/gallery5.webp";
import img6 from "../assets/images/gallery6.webp";
import "../styles/gallery.css";

function Gallery() {

  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <h2>Galeria</h2>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src={img1} alt="Berber duke prere floke" loading="lazy"/>
          </div>

          <div className="gallery-item">
            <img src={img2} alt="Prerje moderne per meshkuj" loading="lazy"/>
          </div>

          <div className="gallery-item">
            <img src={img3} alt="Skin fade profesional" loading="lazy"/>
          </div>

          <div className="gallery-item">
            <img src={img4} alt="Ambient berber shop" loading="lazy"/>
          </div>

          <div className="gallery-item">
            <img src={img5} alt="Vegla profesionale berberi" loading="lazy"/>
          </div>

          <div className="gallery-item">
            <img src={img6} alt="Pamje berber shop" loading="lazy"/>
          </div>

        </div>
      </div>
    </section>
  );

}

export default Gallery;