import React from 'react';

const About = () => (
  <div className="card p-4 mb-3 rounded">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2Fpng_detail%2F20181206%2Fusers-vector-icon-png_260862.jpg&f=1&nofb=1"
      className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Silva Ramón A.</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="card-body bs-component">
            <a href="https://www.linkedin.com/in/ramon-alejandrino-silva" className="card-link btn btn-outline-info">LinkedIn</a>
            <a href="https://github.com/AlejandrinoSilva/" className="card-link btn btn-outline-info">Github</a>
          </div>
      </div>
  </div>

)

export default About;