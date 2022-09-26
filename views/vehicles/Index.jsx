const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Index extends React.Component {
  render() {
    const { vehicles } = this.props;
    console.log(`vehicles = ${vehicles}`);
    return (
      <DefaultLayout title="vehicles">

        <div className="map-table-wrapper">
          <h1 className='head-title'>the vehicles</h1>
          <table className="map-table">
            <thead>
              <tr>
                <th></th>
                <th>class</th>
                <th>make</th>
                <th>model</th>
                <th>owners</th>
              </tr>
            </thead>
            {
              vehicles.map((vehicle, index) => {
                return (
                  <tr key={`tr-${index}`}>
                    <td key={`td-1-${index}`} data-id={vehicle.id} className="td delete-field">
                      <form
                        action={`/vehicle/${vehicle.id}?_method=DELETE`}
                        className="delete-vehicle-form"
                        method="POST">
                        <input type="submit" value="delete" className="btn-delete" />
                      </form>
                    </td>
                    <td key={`td-${index}`} data-id={vehicle.id} className="td class-field">
                      <a className="td-link" href={`/vehicle/${vehicle.id}`}>{vehicle.class}</a>
                    </td>
                    <td key={`td0-${index}`} className="td make-field">
                      {vehicle.make}
                    </td>
                    <td key={`td1-${index}`} className="td model-field">
                      {vehicle.model}
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
            className="link-button vehicle-link-button"
            href="/vehicle/new">new vehicle
          </a>
        </div>

      </DefaultLayout >
    );
  }
}

module.exports = Index;