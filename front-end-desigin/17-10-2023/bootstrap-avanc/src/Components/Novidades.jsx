export default function Novidades() {
  return (
    <div className="d-flex justify-content-center mb-4">
      <form action="" className="col-md-10">
        <h1 className="text-info display-6">Receba novidades</h1>
        <div className="form-control">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" />

          <label className="form-label">Email</label>
          <input type="text" className="form-control" />

        <div className="mt-3 d-flex justify-content-center">
          <button className="btn btn-success">Enviar</button>
        </div>
        </div>
      </form>
    </div>
  )
}