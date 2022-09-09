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