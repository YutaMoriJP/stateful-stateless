import React from 'react';

class Sibling extends React.Component {
  render() {
    const { myteam, team } = this.props;
    console.log(team);
    return (
      <div>
        <p>
          The best team in
          <span className="highlight"> {team[myteam].league} </span>
          is <span className="highlight">{team[myteam].team}</span> and they
          have won{' '}
          <span className="highlight">{team[myteam].leagueTitles} </span>titles.
          The goal this season is to win{' '}
          <span className="highlight">
            {team[myteam].goals.slice(0, 2).join(', ') +
              ' and ' +
              team[myteam].goals.slice(-1).join('')}
          </span>
          . Their best player is{' '}
          <span className="highlight">{team[myteam].bestPlayer}</span> with
          their biggest prospect being{' '}
          <span className="highlight">{team[myteam].biggestPropsect}</span>.
        </p>
      </div>
    );
  }
}

export default Sibling;
