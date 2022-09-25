const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/css/style.css" />

          </head>
          <body>
            <nav className="default-nav">
              <ul className="nav-list">
                <li className="nav-item">
                 <a href="players">players</a> 
                </li>
                <li className="nav-item">
                 <a href="vehicles">vehicles</a> 
                </li>
                <li className="nav-item">
                 <a href="weapons">weapons</a> 
                </li>
                <li className="nav-item nav-seeder-item">
                <label for="cars">Seeders:</label>
                  <select name="seed-picker" className="seed-picker">
                    <option value="players">players</option>
                    <option value="vehicles">vehicles</option>
                    <option value="weapons">weapons</option>
                    <option value="player-vehicles">player-vehicles</option>
                    <option value="player-weapons">player-weapons</option>
                  </select>
                  <input className="nav-btn-seed" type="button" value="seed" />
                </li>
                
              </ul>
            </nav>
            {this.props.children}
          </body>
        </html>
    )
  }
}

module.exports = DefaultLayout;