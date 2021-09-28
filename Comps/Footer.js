const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src="/logo.svg" className="logo-footer" alt="adoya logo" />
            <p>
              © 2021 “Adoya” MChJ.
              <br /> Barcha huquqlar himoylangan
            </p>
          </div>
          <div className="col-lg-3">
            <h2>Ma’lumot</h2>
            <p>Maxfiylik siyosati</p>
            <p>Foydalanish shartlari</p>
            <p>Yetkazib berish</p>
            <p>To’lovlar</p>
          </div>
          <div className="col-lg-3">
            <h2>Aloqa uchun</h2>
            <div className="d-flex">
              <span className="icon icon-phone"></span>
              <p>+998 90 123-45-65</p>
            </div>
            <div className="d-flex">
              <span className="icon icon-map"></span>
              <p>
                Manzil: Toshkent shahar,
                <br /> Qorasaroy 235A
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <h2>Ijtimoiy tarmoqlar</h2>
            <div className="d-flex">
              <span className="icon icon-facebook"></span>
              <p>Facebook</p>
            </div>
            <div className="d-flex">
              <span className="icon icon-telegram"></span>
              <p>Telegram</p>
            </div>
            <div className="d-flex">
              <span className="icon icon-instagram"></span>
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
