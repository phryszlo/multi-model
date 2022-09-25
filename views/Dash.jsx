const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Dash extends React.Component {
  render() {
    return(
      <DefaultLayout title={`Dash`}>
        <h1 className="page-header">Game Dashboard</h1>
        <div className="layout-div">
          <div className="dash-line">
            <a href="players">Show all players</a>
          </div>

        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Dash;