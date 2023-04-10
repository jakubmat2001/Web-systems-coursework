import { Link } from 'react-router-dom';
import Header from '../components/header';
import DisplayQuotes from '../components/show-quotes';

function Project() {
  return (
    <div className="container">
      <Header />
      <main id="detail">
      <DisplayQuotes/>
      <div>
        <Link to="/create-quote">Create Quote</Link>
        <Link to="/update-quote">Update Quote</Link>
        <Link to="/delete-quote">Delete Quote</Link>
      </div>
      </main>
    </div>
    
  );
}

export default Project;


