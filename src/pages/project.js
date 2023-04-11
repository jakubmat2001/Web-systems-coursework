import { Link } from 'react-router-dom';
import Header from '../components/header';
import DisplayQuotes from '../components/show-quotes';
import '../css/button-styles.css'

function Project() {
  return (
    <div className="container">
      <Header />
      <main>
      <h1>Project Quotes</h1>
      <div className="button-grouping">
          <Link className="button" to="/project-tab/project/create-quote">Create Quote</Link>
          <Link className="button" to="/project-tab/project/update-quote">Update Quote</Link>
          <Link className="button" to="/project-tab/project/delete-quote">Delete Quote</Link>
      </div>
        <DisplayQuotes />
        
      </main>
    </div>
  );
}

export default Project;


