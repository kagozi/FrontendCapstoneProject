import pizza from '../images/img1.jpg'
const About = () => {
    return (
  <section class="about" id="about">
      <div class="row">
        <div class="col50">
          <h2 class="titleText"><span>A</span>bout Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            minus animi, iure quae eaque iste magni. Id, enim adipisci!
            Repudiandae, non? Nulla, nemo? Recusandae tempore facere beatae
            animi, aperiam obcaecati. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Temporibus iste ducimus at soluta minima nostrum
            laudantium repudiandae? Porro, totam beatae aut reiciendis nulla
            nihil, iusto possimus unde suscipit, incidunt quidem?<br /><br />Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            similique cumque soluta consectetur reprehenderit error. Voluptatem
            error eligendi necessitatibus facilis facere sit? Dolorum veniam
            corporis illum culpa quisquam. Vel, eligendi? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit.
          </p>
        </div>

        <div class="col50">
          <div class="imgBx">
            <img src={pizza} alt="Pizza" />
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;