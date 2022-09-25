const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Index extends React.Component {
  render() {
    const { vehicles } = this.props;
    console.log(`vehicles = ${vehicles}`);
    return (
      <DefaultLayout title="vehicles">

        <div className="layout-wrapper">
          <h1 className='head-title'>the vehicles</h1>
          <table className="vehicle-map">
            <thead>
              <tr>
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
                    <td key={`td-${index}`} data-id={vehicle.id} className="td class-field">
                      <a className="td-link" href={`/vehicle/${vehicle.id}`}>{vehicle.class}</a> 
                    </td>
                    <td key={`td0-${index}`} className="td make-field">
                      {vehicle.make}
                    </td>
                    <td key={`td1-${index}`} className="td model-field">
                      {vehicle.model}
                    </td>
                    <td key={`td2-${index}`} className="td owners-field">
                      not implemented
                    </td>

                  </tr>
                )
              })
            }
            <tfoot></tfoot>
          </table>
        </div>

      </DefaultLayout >
    );
  }
}

module.exports = Index;