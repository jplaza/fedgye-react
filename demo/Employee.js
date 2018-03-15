function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.picture} alt={props.name} />
    </div>
  );
}

function ContactCardEmail(props) {
  return (
    <div className="employee-email">
      <div className="label">Email</div>
      <div>{props.email}</div>
    </div>
  );
}

function ContactCardPhoneNumber(props) {
  return (
    <div className="employee-phone">
      <div className="label">{props.label}</div>
      <div>{props.number}</div>
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

function EmployeeCard(props) {
  return (
    <ContactCard>
      <EmployeeProfile {...props} />
      <EmployeeContactInfo email={props.email}
                           phone={props.phone} />
    </ContactCard>
  );
}
