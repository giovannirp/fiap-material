import "./App.scss";

function App() {
  return (
    <div className="container">
      <section className="estrutura">
        <article className='box'>
          <h1>Nossa estrutura</h1>
          <img src="http://lorempixel.com.br/350/200/?1" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#">
            Veja mais
          </a>
        </article>

        <article className='box'>
          <h1>Nossa estrutura</h1>
          <img src="http://lorempixel.com.br/350/200/?2" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <a href="#">
            Veja mais
          </a>
        </article>
      </section>

      <section className="estrutura-card">
        <h1>Criando Mixins</h1>

        <div>
          <article>
            <p>
              Lorem 
            </p>
          </article>

          <article>
            <p>
              Lorem
            </p>
          </article>

          <article>
            <p>
              Lorem
            </p>
          </article>
          
        </div>
      </section>
    </div>
  )
}

export default App
