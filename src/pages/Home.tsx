import { FunctionComponent } from "react";
import "./Home.css";
const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <div className="title-hero-container">
        <div className="es-lilin-masa">Es Lilin Masa Lalu</div>
        <div className="hero-container">
          <div className="hero-container-child" />
          <div className="image-hero-content">
            <img
              className="bf97b2b290a48abb043d36485403ea-icon"
              alt=""
              src="/bf97b2b290a48abb043d36485403eafbremovebgpreview-1-1@2x.png"
            />
            <div className="hero-content">
              <div className="es-lilin-masa">
                <ul className="dari-bahan-alami">Dari bahan alami</ul>
              </div>
              <div className="es-lilin-masa">
                <ul className="dari-bahan-alami">Menyegarkan</ul>
              </div>
              <div className="es-lilin-masa">
                <ul className="dari-bahan-alami">Banyak pilihan rasa</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pilihan-rasa-parent">
        <div className="pilihan-rasa">Pilihan Rasa</div>
        <div className="group-parent">
          <div className="rectangle-parent">
            <div className="group-child" />
            <img
              className="e1667b5af2c5d91496308e49078fb8-icon"
              alt=""
              src="/5e1667b5af2c5d91496308e49078fb88removebgpreview-1@2x.png"
            />
            <div className="es-lilin-milo-container">
              <p className="es-lilin">Es lilin</p>
              <p className="es-lilin">Milo</p>
            </div>
          </div>
          <div className="rectangle-group">
            <div className="group-item" />
            <div className="es-lilin-alpukat-container">
              <p className="es-lilin">Es lilin</p>
              <p className="es-lilin">Alpukat</p>
            </div>
            <img
              className="ac5553aea6c986c55a856-removebg-icon"
              alt=""
              src="/11813109121ac5553aea6c986c55a856removebgpreview-1@2x.png"
            />
          </div>
          <div className="rectangle-container">
            <div className="group-inner" />
            <div className="es-lilin-kacang-container">
              <p className="es-lilin">Es lilin</p>
              <p className="es-lilin">Kacang hijau</p>
            </div>
            <img
              className="removebg-preview-1-icon"
              alt=""
              src="/20220127103258removebgpreview-1@2x.png"
            />
          </div>
          <div className="group-div">
            <div className="rectangle-div" />
            <div className="es-lilin-melon-container">
              <p className="es-lilin">Es lilin</p>
              <p className="es-lilin">Melon</p>
            </div>
            <img
              className="melon-removebg-preview-1-icon"
              alt=""
              src="/melonremovebgpreview-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="info-pemesanan-parent">
        <div className="es-lilin-masa">Info Pemesanan</div>
        <div className="group-container">
          <div className="whatsapp-parent">
            <img className="whatsapp-icon" alt="" src="/whatsapp@2x.png" />
            <div className="div">+628563246404</div>
          </div>
          <div className="jl-bungurasih-barat-no-14-war-parent">
            <div className="jl-bungurasih-barat-container">
              <p className="es-lilin">{`Jl. Bungurasih Barat no 14 `}</p>
              <p className="es-lilin">{`Waru, Sidoarjo `}</p>
            </div>
            <img
              className="whatsapp-icon"
              alt=""
              src="/google-maps-old@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="home-child" />
      <div className="es-lilin-masa1">Es lilin masa lalu - 2023</div>
    </div>
  );
};

export default Home;
