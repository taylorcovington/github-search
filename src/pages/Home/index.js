import './style.css';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="App">
      <main className="App-main">
        <p style={{color: 'white'}}>
          Github Search
        </p>

        <Link to="/page2" className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
}
