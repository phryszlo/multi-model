const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Player extends React.Component {

  render() {
    const { player } = this.props;
    console.log(`Player.jsx player: ${player}`);
    return (
      <DefaultLayout title={`${player.name}`}>
        <div className="layout-wrapper">
          <h1 className="head-title">{`${player.name} the ${player.class}`}</h1>
          <form
            className="player-form"
            action={`/player/${player.id}?_method=PUT`}
            method="POST"
          >
            <div className="form-field">
              <div className="form-label">name</div>
              <input
                className="form-input"
                type="text"
                name="title"
                defaultValue={player.name} />
            </div>
            <div className="form-field">
              <div className="form-label">class</div>
              <input
                className="form-input"
                type="text"
                name="title"
                defaultValue={player.class} />
            </div>
            <div className="form-field">
              <div className="form-label">level</div>
              <input
                className="form-input"
                type="text"
                name="title"
                defaultValue={player.level} />
            </div>

            <div className="player-subtable-wrapper player-vehicles-wrapper">
              <h5 className="player-subtable-head player-vehicles-head">
                {`${player.name}'s vehicles`}
              </h5>
              {/* if player has vehicles, list them */}
              {player.vehicles && player.vehicles.length > 0 ?
                <table className="player-vehicles-map">
                  <thead>
                    <tr>
                      <th>class</th>
                      <th>make</th>
                      <th>model</th>
                    </tr>
                  </thead>
                  {player.vehicles.map((vehicle, index) => {
                    return (
                      <tr className="player-vehicle-row">
                        <td
                          key={`ve0-${index}`}
                          className="td vehicle-class-field">
                          {`${vehicle.class}`}
                        </td>
                        <td key={`ve1-${index}`}
                          className="td vehicle-make-field">
                          {`${vehicle.make}`}
                        </td>
                        <td key={`ve2-${index}`}
                          className="td vehicle-model-field">
                          {`${vehicle.model}`}
                        </td>
                      </tr>
                    )
                  })}
                </table>
                : <div className="no-vehicles">{player.vehicles.length}</div>}
            </div>

            <div className="player-subtable-wrapper player-weapons-wrapper">
              <h5 className="player-subtable-head player-vehicles-head">
                {`${player.name}'s weapons`}
              </h5>
              {/* if player has weapons, list them */}
              {player.weapons && player.weapons.length > 0 ?
                <table className="player-weapons-map">
                  <thead>
                    <tr>
                      <th>name</th>
                      <th>class</th>
                      <th>damage</th>
                    </tr>
                  </thead>
                  {player.weapons.map((weapon, index) => {
                    return (
                      <tr className="player-weapon-row">
                        <td
                          key={`we0-${index}`}
                          className="td weapon-name-field">
                          {`${weapon.name}`}
                        </td>
                        <td key={`we1-${index}`}
                          className="td weapon-class-field">
                          {`${weapon.class}`}
                        </td>
                        <td key={`we2-${index}`}
                          className="td weapon-damage-field">
                          {`${weapon.damage}`}
                        </td>
                      </tr>
                    )
                  })}
                </table>
                : <div className="no-weapons">{player.weapons.length}</div>}
            </div>
          </form>
          <a className="link-button player-link-button" href="/players">return to player index</a>
        </div>
      </DefaultLayout >
    );
  }
}

module.exports = Player;