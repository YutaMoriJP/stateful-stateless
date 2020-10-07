import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    const { onChange } = this.props;
    onChange(name);
  }
  handleClick(e) {
    const { isLight, onClickTwo } = this.props;
    e.target.style.backgroundColor = isLight ? 'black' : 'white';
    e.target.style.color = isLight ? 'white' : 'black';
    onClickTwo();
  }
  render() {
    let { name, age, onClick, count, isLight } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>
          Hello, my name is <span className="highlight">{name}</span> and my age
          is {age}. I have clicked the button{' '}
          <span className="highlight">{count}</span>
        </h1>
        <button onClick={onClick}>
          The button has been clicked times {count}
        </button>
        <button onClick={this.handleClick}>
          {isLight ? 'Change to Dark Mode' : 'Change to Light Mode'}
        </button>
        <select id="names" onChange={this.handleChange}>
          <option value="Yuta">Yuta</option>
          <option value="Zaizen">Zaizen</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}

export default Child;
