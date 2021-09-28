// import LanguageDropdown from "./LanguageDropdown";
// import { useTranslation, i18n } from "../../i18n";
import { useState } from "react";
import Modal from "./Modal"

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // const { t } = useTranslation();
  return (
    <header>
      <div className="navbar-top">
        <div className="container d-flex justify-content-between">
          <div>
            {/* <img src="/MapPin.svg" /> */}
            <span className="icon icon-map"></span>
            <span className="mb-0 mx-2 location">
              Manzil: Toshkent
            </span>
          </div>
          <img src="/logo.svg" alt="adoya logo" />
          <div className="d-flex align-items-center">
            {/* <LanguageDropdown /> */}
            <a href="tel:+998903257887">
              <img className="mx-2" src="/phone.svg" />
              <span>+998 90 325-78-87</span>
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-bottom container d-flex d-flex justify-content-between">
        <div className="d-flex" style={{ maxHeight: "44px" }}>
          <button className="section-btn">
            <img src="/ListDashes.svg" />
            <span>Bo’limlar</span>
          </button>
          <div className="d-flex mx-3 search-box">
            <input
              type="search"
              className="search-input"
              placeholder="Mahsulotlarni qidirish..."
            />
            <button className="search-btn">
              <img src="/search.svg" />
              <span>Qidirish</span>
            </button>
          </div>
        </div>
        <div className="d-flex">
          <div className="user-btn" onClick={()=>setVisible(!visible)}>
            <img src="/UserCircle.svg" />
            <p className="m-0">Kirish</p>
          </div>
          <div className="user-btn">
            <img src="/Heart.svg" />
            <p className="m-0">Saqlangan</p>
          </div>
          <div className="user-btn">
            <img src="/Shopping.svg" />
            <p className="m-0">Savatcha</p>
          </div>
        </div>
      </div>
   <Modal visible={visible} setVisible={setVisible}/>
    </header>
  );
};

export default Navbar;
