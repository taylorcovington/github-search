import './style.css';
import { Link } from 'react-router-dom';

export function User() {
  return (
    <div >
      <main >
        <p>
          User Page
        </p>

        <Link to="/" >
          Back to search
        </Link>
      </main>
    </div>
  );
}
