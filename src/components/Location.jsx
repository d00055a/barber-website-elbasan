import "../styles/location.css";

function Location() {
  return (
    <section id="contact" className="location">
      <div className="container">

        <h2>Na Gjeni Këtu</h2>

        <div className="location-content">

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.7750567354938!2d20.079250374779374!3d41.11760351268791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135043562e794987%3A0x7f8856055f36a69!2sBarber%20Shop%20Rois!5e0!3m2!1sen!2s!4v1771872457793!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Lokacioni i Berberit"
            ></iframe>
          </div>

          <div className="location-info">
            <p><strong>📍 Adresa:</strong> Rruga Rinia, Elbasan, Shqipëri </p>
            <p><strong>🕒 Orari:</strong>  08:00 - 14:00 , 16:00 - 20:00 , E mërkura pushim </p>
            <p><strong>📞 Telefon:</strong> +355 69 725 8558 </p>

            <div className="location-buttons">
              <a
               href="https://maps.app.goo.gl/HhhsvMDyTJoTp4UC9"
               target="_blank"
               rel="noopener noreferrer"
               className="btn-primary"
             >
               Hap në Google Maps
             </a>

              <a
                href="tel:+355697258558"
                className="btn-secondary"
              >
                Telefono
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );

}

export default Location;


