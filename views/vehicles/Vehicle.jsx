const React = require('react');
const DefaultLayout = require('../layouts/Default');

class vehicle extends React.Component {

  render() {
    const { vehicle } = this.props;
    console.log(`vehicle.jsx vehicle: ${vehicle}`);
    return (
      <DefaultLayout title={`${vehicle.name}`}>
        <div className="layout-wrapper">
          <h1 className="vehicle-head">{`${vehicle.name} the ${vehicle.class}`}</h1>
          <form
            className="vehicle-form"
            action={`/vehicle/${vehicle.id}?_method=PUT`}
            method="POST"
          >
            <div className="form-field">
              <div className="form-label">name</div>
              <input
                className="form-input"
                type="text"
                name="title"
                defaultValue={vehicle.name} />
            </div>
            <div className="form-field">
              <div className="form-label">class</div>
              <input
                className="form-input"
                type="text"
                name="title"
                defaultValue={vehicle.class} />
            </div>
            <div className="form-field">
              <div className="form-label">level</div>
              <input
                className="form-input"
                type="text"
                name="title"
                defaultValue={vehicle.level} />
            </div>

            

          </form>
          <a className="link-button vehicle-link-button" href="/vehicles">return to vehicle index</a>
        </div>
      </DefaultLayout >
    );
  }
}

module.exports = vehicle;