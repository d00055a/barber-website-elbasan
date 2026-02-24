import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <h3>Barber Shop Rois</h3>
          <p>Jeta nuk është perfekte, por flokët tuaj mund të jenë.</p>
        </div>

        <div className="footer-contact">
          <p>📞 +355 69 725 8558 </p>
          <p>📍 Rruga Rinia, Elbasan, Shqipëri </p>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/barber_shop_rois?igsh=MWM1YWQxNWs2dWxuNA==" target="_blank" rel="noopener noreferrer"
             className="social-link">
            <Instagram size={18} />
            <span>Instagram</span>
          </a>

          <a href="https://www.tiktok.com/@barber_shop_rois?_r=1&_t=ZS-94AbVgqH0oq" target="_blank" rel="noopener noreferrer" 
             className="social-link">
            <FaTiktok size={18} />
            <span>TikTok</span>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Barber Shop Rois. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  );
}

export default Footer;