export default function Images() {
  return (
    <>
      <section>
        <img src="http://lorempixel.com.br/800/200/?1" className="img-fluid" alt="" />
        <hr />
        <img src="http://lorempixel.com.br/300/200/?1" className="img-thumbnail" alt="" />
        <br /><br />
        
        <figure>
          <img src="http://lorempixel.com.br/300/200/?3" className="rounded float-start img-fluid" alt="" />
          <img src="http://lorempixel.com.br/300/200/?4" className="rounded float-end img-fluid" alt="" />
        </figure>
      </section>
    </>
  )
}