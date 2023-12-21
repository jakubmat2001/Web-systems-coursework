import Header from '../../components/Header/header';
import DisplayQuotes from '../../components/ProjectOneComponents/ShowQuotes/show-quotes';
import Footer from '../../components/Footer/footer';

function ViewOnlyPage() {
  return (
    <div className="container">
      <Header />
      <main className='standard-main'>
      <h1>Project Quotes (View Only)</h1>
        <DisplayQuotes />
      </main>
      <Footer />
    </div>

  );
}

export default ViewOnlyPage;


