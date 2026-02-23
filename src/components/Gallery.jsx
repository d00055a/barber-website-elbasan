
import "../styles/gallery.css";

function Gallery() {

  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <h2>Galeria</h2>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="/src/assets/images/gallery1.webp" alt="Berber duke prere floke" />
          </div>

          <div className="gallery-item">
            <img src="/src/assets/images/gallery2.webp" alt="Prerje moderne per meshkuj" />
          </div>

          <div className="gallery-item">
            <img src="/src/assets/images/gallery3.webp" alt="Skin fade profesional" />
          </div>

          <div className="gallery-item">
            <img src="/src/assets/images/gallery4.webp" alt="Ambient berber shop" />
          </div>

          <div className="gallery-item">
            <img src="/src/assets/images/gallery5.webp" alt="Vegla profesionale berberi" />
          </div>

          <div className="gallery-item">
            <img src="/src/assets/images/gallery6.webp" alt="Pamje berber shop" />
          </div>

        </div>
      </div>
    </section>
  );

}

export default Gallery;