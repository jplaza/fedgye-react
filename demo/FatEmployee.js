
  function EmployeeCard(props) {
    return (
      <div>
        <div className="employee-profile">
          <div className="employee-pic">
            <img src={props.picture} />
          </div>
          <div className="employee-name">
            {props.fullName}
          </div>
        </div>
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


  