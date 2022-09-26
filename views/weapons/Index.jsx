const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Index extends React.Component {
  render() {
    const { weapons } = this.props;
    console.log(`weapons = ${weapons}`);
    return (
      <DefaultLayout title="weapons">

        <div className="map-table-wrapper">
          <h1 className='head-title'>the weapons</h1>
          <table className="map-table">
            <thead>
              <tr>
                <th></th>
                <th>name</th>
                <th>class</th>
                <th>damage</th>
                <th>owners</th>
              </tr>
            </thead>
            {
              weapons.map((weapon, index) => {
                return (
                  <tr key={`tr-${index}`}>
                    <td key={`td-1-${index}`} data-id={weapon.id} className="td delete-field">
                      <form
                        action={`/weapon/${weapon.id}?_method=DELETE`}
                        className="delete-weapon-form"
                        method="POST">
                        <input type="submit" value="delete" className="btn-delete" />
                      </form>
                    </td>
                    <td key={`td-${index}`} data-id={weapon.id} className="td name-field">
                      <a className="td-link" href={`/weapon/${weapon.id}`}>{weapon.name}</a>
                    </td>
                    <td key={`td0-${index}`} className="td class-field">
                      {weapon.class}
                    </td>
                    <td key={`td1-${index}`} className="td damage-field">
                      {weapon.damage}
                    </td>
                    <td key={`td2-${index}`} className="td owners-field" style={{ fontSize: "12px" }}>
                      not implemented
                    </td>

                  </tr>
                )
              })
            }
            <tfoot></tfoot>
          </table>

          <a
            className="link-button weapon-link-button"
            href="/weapon/new">new weapon
          </a>

        </div>

      </DefaultLayout >
    );
  }
}

module.exports = Index;