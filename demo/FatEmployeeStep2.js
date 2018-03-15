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
        <div className="employee-email">
          <div className="label">Email</div>
          <div>{props.email}</div>
        </div>
        <div className="employee-mobile">
          <div className="label">Móvil</div>
          <div>{props.phone.mobile}</div>
        </div>
        <div className="employee-mobile">
          <div className="label">Casa</div>
          <div>{props.phone.home}</div>
        </div>
      </div>
    </div>
  );
}

