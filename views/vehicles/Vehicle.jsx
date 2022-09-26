const React = require('react');
const DefaultLayout = require('../layouts/Default');

class vehicle extends React.Component {

  render() {
    const { vehicle } = this.props;
    const isNew = vehicle ? false : true;

    console.log(isNew ? 'no vehicle received' : `vehicle.jsx vehicle: ${vehicle}`);
    return (
      <DefaultLayout title={
        isNew ? 'new vehicle'
          : `${vehicle.make} ${vehicle.model}`
      }>
        <div className="layout-wrapper">
          <h1 className="head-title">{
            isNew ? 'new vehicle'
              : `${vehicle.make} ${vehicle.model}`
          }</h1>
          <form
            className="vehicle-form"
            action={
              isNew ? '/vehicle/'
                : `/vehicle/${vehicle.id}?_method=PUT`
            }
            method="POST"
          >
            <div className="form-field">
              <div className="form-label">class</div>
              <input
                className="form-input"
                type="text"
                name="class"
                defaultValue={
                  isNew ? ''
                    : vehicle.class
                }
                required
              />
            </div>
            <div className="form-field">
              <div className="form-label">make</div>
              <input
                className="form-input"
                type="text"
                name="make"
                defaultValue={
                  isNew ? ''
                    : vehicle.make
                }
                required
              />
            </div>
            <div className="form-field">
              <div className="form-label">model</div>
              <input
                className="form-input"
                type="text"
                name="model"
                defaultValue={
                  isNew ? ''
                    : vehicle.model
                }
                required
              />
            </div>


            {/* ☣️☣️☣️☣️☣️☣️☣️☣️ BUTTONS ☣️☣️☣️☣️☣️☣️☣️☣️ */}

            <div className="form-controls-wrapper">
              {
                isNew ?
                  <input
                    type="submit"
                    className="save-button"
                    href="/vehicles"
                    value="save vehicle" />
                  : ''
              }
              <a className="link-button vehicle-link-button" href="/vehicles">vehicle index</a>
            </div>
          </form>
        </div>
      </DefaultLayout >
    );
  }
}

module.exports = vehicle;