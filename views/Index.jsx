const React = require('react');

<nav>
    <a href="/fruits/new">Create a New Fruit</a>
</nav>

class Index extends React.Component {
  render() {
    const { fruits } = this.props;  // Added curly braces around fruits
    return (
      <div>
        <h1>Fruits Index Page</h1>
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li key={i}>  {/* Added key attribute */}
                The{' '}
                <a href={`/fruits/${i}`}>  {/* Use backticks for template literal */}
                  {fruit.name}
                </a>{' '}
                is {fruit.color} <br />
                {fruit.readyToEat
                  ? 'It is ready to eat'
                  : 'Nope, it is not ready'}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;  // Corrected the export name
