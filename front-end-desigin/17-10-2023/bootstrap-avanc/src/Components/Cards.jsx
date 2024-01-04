export default function Cards() {
  return (
    <>
      <div className="mt-4 mb-4 d-md-flex flex-row justify-content-around">
        {/* col = tela normal
        md tela media */}
        <div className="card col-md-5 mb-4">
          <img
            className="card-img-top w-100"
            src="https://fastly.picsum.photos/id/1033/330/170.jpg?hmac=Fre9vp5Ifc5HCwe1NL437BI4E_mG4EGkKFLFDxoy2M0"
          />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make content.</p>
          </div>
          <a href="#" className="link-danger link-underline-opacity-0 text-center mb-4 ">Veja mais</a>
        </div>
        
        <div className="card col-md-5 mb-4">
          <img
            className="card-img-top w-100"
            src="https://fastly.picsum.photos/id/1033/330/170.jpg?hmac=Fre9vp5Ifc5HCwe1NL437BI4E_mG4EGkKFLFDxoy2M0"
          />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make content.</p>
          </div>
          <a href="#" className="link-danger link-underline-opacity-0 text-center mb-4 ">Veja mais</a>
        </div>
      </div>
    </>
  )
}