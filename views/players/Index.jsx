const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Index extends React.Component {
  render() {
    const { players } = this.props;
    console.log(`players = ${players}`);
    return (
      <DefaultLayout title="players">

        <div className="map-table-wrapper">
          <h1 className='head-title'>the players</h1>
          <table className="map-table">
            <thead>
              <tr>
                <th>name</th>
                <th>class</th>
                <th>level</th>
                <th>vehicles</th>
                <th>weapons</th>
                <th></th>
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
                    <td key={`td1-${index}`} className="td td-num level-field">
                      {player.level}
                    </td>
                    <td key={`td2-${index}`} className="td td-num vehicles-field">
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
                    <td key={`td2-${index}`} className="td td-num weapons-field">
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
                    <td key={`td-1-${index}`} data-id={player.id} className="td delete-field">
                      <form
                        action={`/player/${player.id}?_method=DELETE`}
                        className="delete-player-form"
                        method="POST">
                          <input type="submit" value="delete" className="btn-delete" />
                      </form>
                    </td>
                  </tr>
                )
              })
            }
            <tfoot></tfoot>
          </table>

          <a
            className="link-button player-link-button"
            href="/player/new">new player
          </a>
        </div>

      </DefaultLayout >
    );
  }
}

module.exports = Index;