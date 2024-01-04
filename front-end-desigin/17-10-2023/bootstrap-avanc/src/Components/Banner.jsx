export default function Banner() {
  return (
    <div id="carouselNaveg" className="carousel slide">
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://fastly.picsum.photos/id/435/1117/300.jpg?hmac=RSRzXZAkOscrX1D_pmGLDodp9mhI7K2WoQfTBhajMuk"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://fastly.picsum.photos/id/787/1117/300.jpg?hmac=pBurZW7mp0J9NKLoApuOdW_r_YUtiCsmazXyVwzL1Z8"
            />
          </div>
        </div>
      </div>
      {/* botao de navegação */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselNaveg" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselNaveg" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
