import './style.css';
import { Link } from 'react-router-dom';

export function User() {
  return (
    <div className="App">
      <main className="App-main">
        <p>
          User Page
        </p>

        <Link to="/" className="App-link">
          Back to search
        </Link>
      </main>
    </div>
  );
}
