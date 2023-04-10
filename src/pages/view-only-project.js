import Header from '../components/header';
import DisplayQuotes from '../components/show-quotes';

function ViewOnlyPage() {
  return (
    <div className="container">
      <Header />
      <main id="detail">
      <DisplayQuotes/>
      </main>
    </div>
    
  );
}

export default ViewOnlyPage;


