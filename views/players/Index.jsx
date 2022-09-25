const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Index extends React.Component {
  render() {
    const { players } = this.props;
    console.log(`players = ${players}`);
    return (
      <DefaultLayout title="players">

        <div className="layout-wrapper">
          <h1 className='head-title'>the players</h1>
          <table className="player-map">
            <thead>
              <tr>
                <th>name</th>
                <th>class</th>
                <th>level</th>
                <th>vehicles</th>
                <th>weapons</th>
              </tr>
            </thead>
            {
              players.map((player, index) => {
                return (
                  <tr key={`tr-${index}`}>
                    <td key={`td-${index}`} data-id={player.id} className="td name-field">
                      <a className="td-link" href={`/player/${player.id}`}>{player.name}</a>
                    </td>
                    <td key={`td0-${index}`} className="td class-field">
                      {player.class}
                    </td>
                    <td key={`td1-${index}`} className="td level-field">
                      {player.level}
                    </td>
                    <td key={`td2-${index}`} className="td vehicles-field">
                      {player.vehicles.length}
                      {/* {player.vehicles && player.vehicles.length > 0 ?
                      <ul className="vehicle-sublist">
                      {player.vehicles.map((vehicle, index) => {
                        return (
                          <li className="vehicle-subitem">
                            {`${vehicle}`}
                            </li>
                        )
                      }
                      )}
                      </ul>
                      : <div className="no-weapons">player has no vehicles</div>} */}

                    </td>
                    <td key={`td2-${index}`} className="td weapons-field">
                      {player.weapons.length}
                      {/* {player.vehicles && player.vehicles.length > 0 ?
                      <ul className="vehicle-sublist">
                      {player.vehicles.map((vehicle, index) => {
                        return (
                          <li className="vehicle-subitem">
                            {`${vehicle}`}
                            </li>
                        )
                      }
                      )}
                      </ul>
                      : <div className="no-weapons">player has no vehicles</div>} */}

                    </td>

                  </tr>
                )
              })
            }
            <tfoot></tfoot>
          </table>

          <a
            className="link-button player-link-button"
            href="/players">return to player index
          </a>
        </div>

      </DefaultLayout >
    );
  }
}

module.exports = Index;