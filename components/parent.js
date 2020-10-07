import React from 'react';
import Child from './child';
import Children from './children';
import Sibling from './sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Yuta',
      age: 25,
      count: 0,
      isLight: true,
      myteam: 'bayern',
      teams: {
        bayern: {
          bestPlayer: 'Lewy',
          goals: ['Champions League', 'Bundesliga', 'DFB Cup'],
          biggestPropsect: 'Kouassi',
          leagueTitles: 25,
          league: 'the Bundesliga',
          team: 'Bayern',
        },
        liverpool: {
          bestPlayer: 'Mane',
          goals: ['Champions League', 'Premier League', 'FA Cup'],
          biggestPropsect: 'none',
          leagueTitles: 17,
          league: 'the Premier League',
          team: 'liverpool',
        },
        madrid: {
          bestPlayer: 'Ramos',
          goals: ['Champions League', 'La Liga', 'Copa Del Rey'],
          biggestPropsect: 'Odegaard',
          leagueTitles: 30,
          league: 'La Liga',
          team: 'madrid',
        },
      },
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.changeTeam = this.changeTeam.bind(this);
  }

  incrementCount() {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  }
  changeName(newName) {
    this.setState({ name: newName });
  }
  changeBackground() {
    const { isLight } = this.state;
    this.setState({ isLight: !isLight });
    document.body.style.backgroundColor = isLight ? 'black' : 'white';
    document.body.style.color = isLight ? 'white' : 'black';
  }
  changeTeam(team) {
    this.setState({ myteam: team });
  }
  render() {
    let { name, age, count, myteam, teams } = this.state;
    console.log(this.state);
    return (
      <div>
        <Child
          name={name}
          age={age}
          count={count}
          onClick={this.incrementCount}
          onChange={this.changeName}
          onClickTwo={this.changeBackground}
          isLight={this.state.isLight}
        />
        <hr />
        <Children onChange={this.changeTeam} />
        <Sibling myteam={myteam} team={teams} />
      </div>
    );
  }
}

export default Parent;
