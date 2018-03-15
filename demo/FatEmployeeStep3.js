function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.picture} alt={props.name} />
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
    <div>
      <EmployeeProfile {...props} />
      <div className="employee-contact-info">
        <h2>Información de contacto</h2>
        <ContactCardEmail email={props.email} />
        <ContactCardPhoneNumber
          number={props.phone.mobile}
          label="Móvil" />
        <ContactCardPhoneNumber
          number={props.phone.home}
          label="Casa" />
      </div>
    </div>
  );
}

