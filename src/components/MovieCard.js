import React from 'react';

const MovieCard = (props) => {
  const { filmiçeriği, filmyılı, filmposteri, filmadı, filmortalaması, filmoysayısı, filmorijinaladı } = props;

  function Ortalama(OY) {
    if (OY >= 7.7) {
      return "ap_altın"
    } else if (OY >= 5.4) {
      return "ap_turuncu"
    } else {
      return "ap_kırmızı"
    }
  }

  return (
    <div style={{ width: "170px", height: "242px", marginBottom: "55px", marginLeft: "10px" }}>
      <figure className="imghvr-push-up border border-warning">
        <img src={filmposteri} height="242px" width="170px" alt={filmorijinaladı} />


        <figcaption>
          <h6 style={{ color: "red", textAlign: "center", fontSize: "12px" }}>{filmadı}</h6>
          <p>
            {filmiçeriği}
          </p>
        </figcaption>



        <div className="başlık bg-dark">
          <h5>{filmadı}</h5>
          <p className={Ortalama(filmortalaması)}>{filmortalaması}</p>
        </div>
      </figure>
    </div>
  )
}

export default MovieCard;