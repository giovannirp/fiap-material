export default function ListaCompras() {
  return (
    <>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Marca</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Queijo Minas</td>
            <td>Minas</td>
            <td>61,70</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Tênis</td>
            <td>Nike</td>
            <td>210,70</td>
          </tr>
          <tr>
            <th>1</th>
            <td>Bike</td>
            <td>Caloi</td>
            <td>3.000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
