// src/components/Service/ServiceItem.jsx
import React from "react";

const ServiceItem = ({ icon, title, description }) => (
  <div className="services-one__single">
    {/* ICON */}
    <div className="services-one__icon">{icon}</div>

    {/* TITLE */}
    <h3 className="services-one__title">{title}</h3>

    {/* DESCRIPTION */}
    <p className="services-one__text line-clamp-2">{description}</p>
  </div>
);

export default ServiceItem;
