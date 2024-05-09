const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

const languages = ["JavaScript", "Python", "Java", "C++"];

function Header({ title }) {
  console.log({ title });
  return <h1>My Header componenet with title: {title}</h1>;
}

function Footer() {
  return <h1>My Footer componenet</h1>;
}

function List() {
  return (
    <ul>
      {languages.map((language) => (
        <li key={language}>{language}</li>
      ))}
    </ul>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    console.log("Button clicked");
    setCount(count + 1);
  }

  return (
    <div>
      <Header title="Hello" />
      <List />
      <button onClick={handleClick}>Click me: {count}</button>
      <Footer />
    </div>
  );
}

root.render(<App />);
