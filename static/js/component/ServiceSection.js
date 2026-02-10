// src/components/ServiceSection.js
import React from 'react';

const ServiceSection = ({
    services
}) => {
    return ( <
        section className = "services-section" >
        <
        h2 className = "services-title" > ZenithSoft 主要服務 < /h2> <
        div className = "services-grid" > {
            services.map((service, index) => ( <
                div key = {
                    index
                }
                className = "service-item" >
                <
                div className = "service-icon-wrapper" > {
                    service.icon
                } <
                /div> <
                h3 className = "service-title" > {
                    service.title
                } < /h3> <
                p className = "service-description" > {
                    service.description
                } < /p> <
                /div>
            ))
        } <
        /div> <
        /section>
    );
};

export default ServiceSection;