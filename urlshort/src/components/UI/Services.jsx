

import React from 'react'
import '../../styles/services.css'

const Services = () => {
  return <section id="services">
    <div className="container">
        <div className="service__top-content">
            <h6 className='subtitle'>Our Services</h6>
            <h2>Save time managing your business with</h2>
            <h2 className="highlight"> our best services</h2>
        </div>

        <div className="service__item-wrapper">
            <div className="services__item">
                <span className="service__icon"><i class="ri-apps-line"></i></span>
                <h3 className="service__title">App Development</h3>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Eum dolores hic quis molestias optio 
                    id eveniet, libero et repellendus placeat.
                </p>
            </div>
        </div>
    </div>
  </section>
}

export default Services