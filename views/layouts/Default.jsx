const React = require('react');
class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.seedRef = React.createRef();
    this.seedClick = this.seedClick.bind(this);
  }

  seedClick() {
    console.log('thing was clicked')
    console.log(`seedRef = ${seedRef.current}`);
  }

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
                <a href="/players">players</a>
              </li>
              <li className="nav-item">
                <a href="/vehicles">vehicles</a>
              </li>
              <li className="nav-item">
                <a href="/weapons">weapons</a>
              </li>
              <li className="nav-item nav-seeder-item">
                <form action={`/players/seed?_method=GET`} className="seeder-form" method="POST">
                  <label htmlFor="cars">Seeders:</label>
                  <select
                    name="seed-picker"
                    className="seed-picker"
                    ref={this.seedRef}
                  >
                    <option value="players">players</option>
                    <option value="vehicles">vehicles</option>
                    <option value="weapons">weapons</option>
                    <option value="player-vehicles">player-vehicles</option>
                    <option value="player-weapons">player-weapons</option>
                  </select>
                  <input
                    className="nav-btn-seed"
                    type="submit"
                    value="seed"
                    onClick={this.seedClick}
                  />
                </form>
              </li>

            </ul>
          </nav>

          {this.props.children}
          
          <script src="/js/app.js"></script>
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout;