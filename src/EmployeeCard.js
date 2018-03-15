import React from 'react';
import './EmployeeCard.css';


function Avatar(props) {
  return (
    <div className="avatar-container">
      <div className="avatar">
        <img src={props.picture} alt={props.name} />
      </div>
    </div>
  );
}

function ContactCardEmail(props) {
  return (
    <div className="contact-info-datum">
      <div className="label">Email</div>
      <div className="datum">{props.email}</div>
    </div>
  );
}

function ContactCardPhoneNumber(props) {
  return (
    <div className="contact-info-datum">
      <div className="label">{props.label}</div>
      <div className="datum">{props.number}</div>
    </div>
  );
}

function EmployeeContactInfo(props) {
  return (
    <div className="employee-contact-info">
      <h2>Información de contacto</h2>
      <ContactCardEmail email={props.email} />
      <ContactCardPhoneNumber number={props.phone.mobile} label="Móvil" />
      <ContactCardPhoneNumber number={props.phone.home} label="Casa" />
    </div>
  );
}

function ContactCard(props) {
  return (
    <div className="contact-card">
      {props.children}
    </div>
  );
}

function EmployeeProfile(props) {
  return (
    <div className="employee-profile">
      <Avatar picture={props.profilePic} name={props.fullName} />
      <div className="employee-name">
        {props.fullName}
      </div>
    </div>
  );
}

export default function EmployeeCard(props) {
  return (
    <ContactCard>
      <EmployeeProfile {...props} />
      <EmployeeContactInfo email={props.email}
                           phone={props.phone} />
    </ContactCard>
  );
}
