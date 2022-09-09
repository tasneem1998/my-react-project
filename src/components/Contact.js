import React from 'react'

const Contact = () => {
    return (
        <section className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card p-3'>
                        <div className='card-body'>
                            <h2 className='text-center'>Contact Us</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea rows="3" className="form-control" id="message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact