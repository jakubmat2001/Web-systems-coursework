import { Link } from 'react-router-dom';
import Header from '../components/header';
import SecondDisplayQuotes from '../components/show-second-quotes';
import '../css/button-styles.css'

function SecondProject() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Second Project Quotes</h1>
        <div className="button-grouping">
          <Link className="button" to="/second-project-tab/second-project/second-create-quote">Create Quote</Link>
          <Link className="button" to="/second-project-tab/second-project/second-update-quote">Update Quote</Link>
          <Link className="button" to="/second-project-tab/second-project/second-delete-quote">Delete Quote</Link>
        </div>
        <SecondDisplayQuotes />
      </main>
    </div>
  );
}

export default SecondProject;
