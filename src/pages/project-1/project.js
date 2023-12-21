import { Link } from 'react-router-dom';
import Header from '../../components/Header/header';
import DisplayQuotes from '../../components/ProjectOneComponents/ShowQuotes/show-quotes';
import Footer from '../../components/Footer/footer'
import '../../global-css/button-styles.css'
import '../../global-css/project.css'

function Project() {
  return (
    <div className='container'>
        <Header />
        <main className='standard-main'>
          <h1>Project Quotes</h1>
          <div className="button-grouping">
            <Link className="button" to="/project-tab/project/create-quote">Create Quote</Link>
            <Link className="button" to="/project-tab/project/update-quote">Update Quote</Link>
            <Link className="button" to="/project-tab/project/delete-quote">Delete Quote</Link>
          </div>
          <DisplayQuotes />
        </main>
        <Footer />
    </div>
  );
}

export default Project;


