const React = require('react');
const DefaultLayout = require('../layouts/Default');

class Player extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.editMode = false;
  //   // this.editClick = this.editClick.bind(this);
  // }

  editMode = false;



  render() {
    const { player } = this.props;
    const isNew = player ? false : true;
    // let editMode = false;

    const editClick = () => {
      console.log('editClick reached');
      this.editMode = !this.editMode;
    }

    console.log(isNew ? 'no player received' : `Player.jsx player: ${player}`);
    return (
      <DefaultLayout title={
        isNew ? 'new player'
          : `${player.name}`
      }>
        <div className="layout-wrapper">
          <h1 className="head-title">{
            isNew ? 'new player'
              : `${player.name} the ${player.class}`
          }</h1>
          <form
            className="player-form"
            action={
              isNew ? '/player/'
                : `/player/${player.id}?_method=PUT`
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
                    : player.name
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
                    : player.class
                }
                required
              />
            </div>
            <div className="form-field">
              <div className="form-label">level</div>
              <input
                className="form-input"
                type="text"
                name="level"
                defaultValue={
                  isNew ? ''
                    : player.level
                }
                required
              />
            </div>

            {/* ☣️☣️☣️☣️☣️☣️☣️☣️ SUB-SECTIONS ☣️☣️☣️☣️☣️☣️☣️☣️ */}

            <div className="player-subtable-wrapper player-vehicles-wrapper">
              <h5 className="player-subtable-head player-vehicles-head">
                {
                  isNew ? 'vehicles'
                    : `${player.name}'s vehicles`
                }
              </h5>
              {/* if player has vehicles, list them */}
              {player && player.vehicles && player.vehicles.length > 0 ?
                <table className="player-vehicles-map">
                  <thead>
                    <tr>
                      <th>class</th>
                      <th>make</th>
                      <th>model</th>
                    </tr>
                  </thead>
                  {
                    player.vehicles.map((vehicle, index) => {
                      return (
                        <tr className="player-vehicle-row">
                          <td
                            key={`ve0-${index}`
                            }
                            className="td vehicle-class-field">
                            {
                              `${vehicle.class}`
                            }
                          </td>
                          <td key={`ve1-${index}`}
                            className="td vehicle-make-field">
                            {
                              `${vehicle.make}`
                            }
                          </td>
                          <td key={`ve2-${index}`}
                            className="td vehicle-model-field">
                            {
                              `${vehicle.model}`
                            }
                          </td>
                        </tr>
                      )
                    })}
                </table>
                : <div className="no-vehicles">{
                  isNew ? ''
                    : player.vehicles.length
                }</div>}
            </div>

            <div className="player-subtable-wrapper player-weapons-wrapper">
              <h5 className="player-subtable-head player-vehicles-head">
                {
                  isNew ? 'weapons'
                    : `${player.name}'s weapons`

                }
              </h5>
              {/* if player has weapons, list them */}
              {

                player && player.weapons && player.weapons.length > 0 ?
                  <table className="player-weapons-map">
                    <thead>
                      <tr>
                        <th>name</th>
                        <th>class</th>
                        <th>damage</th>
                      </tr>
                    </thead>
                    {
                      player.weapons.map((weapon, index) => {
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
                              className="td damage-field">
                              {`${weapon.damage}`}
                            </td>
                          </tr>
                        )
                      })}
                  </table>
                  : <div className="no-weapons">
                    {
                      isNew ? ''
                        : player.weapons.length
                    }
                  </div>
              }
            </div>

            {/* ☣️☣️☣️☣️☣️☣️☣️☣️ BUTTONS ☣️☣️☣️☣️☣️☣️☣️☣️ */}

            <div className="form-controls-wrapper">
            <input
                    type="submit"
                    className="save-button"
                    href="/players"
                    value="save player" />

                    {/* I'll add this back in if I ever figure out how to make the edit
                    button do anything useful (and I haven't moved on to something more useful) */}
              {/* {
                isNew ?
                  <input
                    type="submit"
                    className="save-button"
                    href="/players"
                    value="save player" />
                  : ''
              } */}
              <div className="form-link-buttons-wrapper">
                <a className="link-button player-link-button" href="/players">player index</a>
                <a className="link-button player-link-button edit-toggle-button" onClick={editClick()}>edit</a>
              </div>
              {/* {this.editMode ?
                <input
                  type="submit"
                  className="save-button edit-save-button"
                  href="/players"
                  value="save player" />
                : ''
                // <input
                //   disabled
                //   type="submit"
                //   className="save-button edit-save-button"
                //   href="/players"
                //   value="save player" />
              } */}
            </div>
          </form>
        </div>
      </DefaultLayout >
    );
  }
}

module.exports = Player;