import React from 'react'
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className='container'>
      <h2 className='text-center my-5'>Our Services</h2>
      <div className='row'>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="https://picsum.photos/300/300" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services