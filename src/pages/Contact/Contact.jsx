import React from "react";
import "./Contact.css";
import ContactInfoItem from "../../components/ContactInfoItem/ContactInfoItem";
import ContactForm from "../../components/ContactForm/ContactForm";
import { MdPlace, MdEmail } from "react-icons/md";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Contact() {
  return (
    <div>
      <div className="container-Contact">
        <div className="cs-left">
          <ContactInfoItem icon={<MdPlace />} text={"London, UK"} />
          <ContactInfoItem
            icon={<MdEmail />}
            text={"cwei01@student.bbk.ac.uk"}
          />
          <MapContainer
            center={[51.52198311688521, -0.12987471940335601]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "250px" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.52198311688521, -0.12987471940335601]}>
              <Popup>Birkbeck, University of London</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="cs-right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
