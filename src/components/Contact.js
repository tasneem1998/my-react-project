import React from 'react'

const Contact = () => {
    return (
        <section className='container mt-5'>
            <div className='card p-3'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-6 border-end'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                        <div className='col-md-6'>
                            <h2>Contact Us</h2>
                            <ul>
                                <li>HAHA</li>
                                <li>HIHIH</li>
                                <li>HUHU</li>
                                <li>BHUBHU</li>
                                <li>BHFEE</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact