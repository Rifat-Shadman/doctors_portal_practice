import React from 'react';
import writer from '../../../images/writer.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment" style={{ height: 'fit-content', marginTop: '200px', border:'3px solid green' }}>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-md-block">
                        <img src={writer} alt=""/>
                    </div>
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-4 py-5" style={{color:'black', opacity:'0.8'}}>
                        <h5 className="text-uppercase" >Appointment</h5>
                        <h1 className="my-4">Learn From the Very Best<br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div> */}

            <div className="container mb-5">
                <div className="row mb-5">
                    
                    <div className="col-md-7 align-self-center" style={{color:'black', opacity:'0.8'}}>
                        <h1>Get Top-Notch Contents<br/> Today</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={writer} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;