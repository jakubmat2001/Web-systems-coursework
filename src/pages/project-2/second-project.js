import { Link } from 'react-router-dom';
import Header from '../../components/Header/header';
import SecondDisplayQuotes from '../../components/ProjectTwoComponents/ShowSecondQuotes/show-second-quotes';
import Footer from '../../components/Footer/footer';
import '../../global-css/button-styles.css'
import '../../global-css/project.css'

function SecondProject() {
  return (
    <div className='container'>
      <Header />
      <main className='standard-main'>
        <h1>Second Project Quotes</h1>
        <div className="button-grouping">
          <Link className="button" to="/second-project-tab/second-project/second-create-quote">Create Quote</Link>
          <Link className="button" to="/second-project-tab/second-project/second-update-quote">Update Quote</Link>
          <Link className="button" to="/second-project-tab/second-project/second-delete-quote">Delete Quote</Link>
        </div>
        <SecondDisplayQuotes />
      </main>
      <Footer />
    </div>
  );
}

export default SecondProject;
