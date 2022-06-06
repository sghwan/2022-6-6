import logo from './logo.svg';
import './App.css';

function Header() {
  return <header><h1><a href="">Web</a></h1></header>
}

function Nav(props) {
  console.log("data", props.data)
  const list = props.data.map((topic) => {
    return <li key={topic.id}><a href={'/read/' + topic.id}>{topic.title}</a></li>
  })
  return <nav>
    <ol>
      {list}
    </ol></nav>
}

function Article(props) {
  console.log("props", props);
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ]
  return (
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
      <Article title="HTML" body="HTML is ..."></Article>
    </div>
  );
}

export default App;
