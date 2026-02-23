import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <h3>Barber Elbasan</h3>
          <p>Stil, profesionalizëm dhe përkujdesje për çdo detaj.</p>
        </div>

        <div className="footer-contact">
          <p>📞 +355 6X XXX XXXX</p>
          <p>📍 Elbasan, Shqipëri</p>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Barber Elbasan. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  );
}

export default Footer;