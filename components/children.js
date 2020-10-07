import React from 'react';

class Children extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const team = event.target.value;
    const { onChange } = this.props;
    onChange(team);
  }
  render() {
    return (
      <select onChange={this.handleChange}>
        <option value="bayern">Bundesliga</option>
        <option value="madrid">La Liga</option>
        <option value="liverpool">Premier League</option>
      </select>
    );
  }
}

export default Children;
