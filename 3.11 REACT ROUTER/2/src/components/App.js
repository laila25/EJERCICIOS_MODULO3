import React from "react";
import "../stylesheets/App.css";
import Home from "./Home";
import ItemList from "./ItemList";
import ItemDetails from "./ItemDetail";
import SearchByCity from "./SearchByCity";
import SearchByGenre from "./SearchByGenre";
import { Link, Route, Switch } from "react-router-dom";

let usersData = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.getDataFromServer = this.getDataFromServer.bind(this);
    this.filterByCity = this.filterByCity.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.filterByUser = this.filterByUser.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderUser = this.renderUser.bind(this);
    this.getDataFromServer();
  }

  getDataFromServer() {
    fetch("https://randomuser.me/api/?results=12")
      .then(Response => Response.json())
      .then(data => {
        usersData = data.results;
        console.log(usersData);
        this.setState({
          users: usersData
        });
      });
  }

  filterByCity(ev) {
    const citySelected = ev.target.value;
    if (ev.target.checked === true) {
      const usersFilterByCity = this.state.users.filter(
        user => user.location.city === citySelected
      );
      this.setState({
        users: usersFilterByCity
      });
    } else {
      this.setState({
        users: usersData
      });
    }
  }

  filterByGenre(ev) {
    const genreSelected = ev.target.value;
    if (ev.target.checked === true) {
      const usersFilterByGenre = this.state.users.filter(
        user => user.gender === genreSelected
      );
      this.setState({
        users: usersFilterByGenre
      });
    } else {
      this.setState({
        users: usersData
      });
    }
  }

  filterByUser(ev) {
    const userSelected = ev.currentTarget;
    console.log(userSelected);
    if (ev.target.checked === true) {
      const usersFilterByUser = this.state.users.filter(
        user => user.gender === userSelected
      );
      this.setState({
        users: usersFilterByUser
      });
    } else {
      this.setState({
        users: usersData
      });
    }
  }

  renderList() {
    return (
      <ItemList users={this.state.users} filterByUser={this.filterByUser} />
    );
  }

  renderUser(props) {
    let userSelected;
    console.log(props.match.params.id);

    for (const user of this.state.users) {
      if (user.id.name === props.match.params.id) {
        userSelected = user;
      }
    }
    console.log(userSelected);
    return <ItemDetails user={userSelected} />;
  }

  render() {
    return (
      <div className="app">
        <div className="filters">
          <p>
            <Link to="/">INICIO</Link>
            <br />
            <Link to="/itemlist">VER USUARIOS</Link>
          </p>
          <p>
            <b>FILTERS</b>
          </p>
          <form>
            <p>
              <b>Ciudad</b>
            </p>
            <SearchByCity users={usersData} filterByCity={this.filterByCity} />
            <p>
              <b>Género:</b>
            </p>
            <SearchByGenre
              users={this.state.users}
              filterByGenre={this.filterByGenre}
            />
          </form>
        </div>
        <div className="users">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/itemlist" render={this.renderList} />
            <Route path="/user/:id" render={this.renderUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
