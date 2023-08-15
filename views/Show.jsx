const React = require('react');

class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;  // Changed fruits to fruit
    return (
      <div>
        <h1>Fruits Page</h1>
        The {fruit.name} is {fruit.color}{' '}
        {fruit.readyToEat ? 'it is good to eat' : "Nope, it's not ready to eat"}
      </div>
    );
  }
}

module.exports = Show;
