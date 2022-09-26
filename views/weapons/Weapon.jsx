const React = require('react');
const DefaultLayout = require('../layouts/Default');

class weapon extends React.Component {

  render() {
    const { weapon } = this.props;
    const isNew = weapon ? false : true;

    console.log(isNew ? 'no weapon received' : `weapon.jsx weapon: ${weapon}`);
    return (
      <DefaultLayout title={
        isNew ? 'new weapon'
          : `${weapon.name}`
      }>
        <div className="layout-wrapper">
          <h1 className="head-title">{
            isNew ? 'new weapon'
              : `${weapon.name} ${weapon.class}`
          }</h1>
          <form
            className="weapon-form"
            action={
              isNew ? '/weapon/'
                : `/weapon/${weapon.id}?_method=PUT`
            }
            method="POST"
          >
            <div className="form-field">
              <div className="form-label">name</div>
              <input
                className="form-input"
                type="text"
                name="name"
                defaultValue={
                  isNew ? ''
                    : weapon.name
                }
                required
              />
            </div>
            <div className="form-field">
              <div className="form-label">class</div>
              <input
                className="form-input"
                type="text"
                name="class"
                defaultValue={
                  isNew ? ''
                    : weapon.class
                }
                required
              />
            </div>
            <div className="form-field">
              <div className="form-label">damage</div>
              <input
                className="form-input"
                type="text"
                name="damage"
                defaultValue={
                  isNew ? ''
                    : weapon.damage
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
                    href="/weapons"
                    value="save weapon" />
                  : ''
              }
              <a className="link-button weapon-link-button" href="/weapons">weapon index</a>
            </div>
          </form>
        </div>
      </DefaultLayout >
    );
  }
}

module.exports = weapon;