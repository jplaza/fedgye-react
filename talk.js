function PhoneDisplay(props) {
  return <div>{props.number}</div>;
}

const app = <PhoneDisplay number="911" />
ReactDOM.render(
  app
  document.getElementById('app');
)

class PhoneDisplay extends React.Component {
  render() {
    return <div>{this.props.number}</div>;
  }
}

function Favorite(props) {
  return <li><a href={props.url}>{props.text}</a></li>;
}

function Main(props) {
  return (
    <ul>
      <Favorite text="Google" url="https://google.com" />
      <Favorite text="Bing" url="https://bing.com" />
      <Favorite text="Yahoo!" url="https://yahoo.com" />
    </ul>
  );
}

ReactDOM.render(
  <Main />
  document.getElementById('app');
)
