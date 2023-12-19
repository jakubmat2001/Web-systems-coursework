import Header from '../../components/Header/header';
import DisplayQuotes from '../../components/ProjectOneComponents/ShowQuotes/show-quotes';
import Footer from '../../components/Footer/footer';

function ViewOnlyPage() {
  return (
    <div className="container">
      <Header />
      <main id="detail">
        <DisplayQuotes />
      </main>
      <Footer />
    </div>

  );
}

export default ViewOnlyPage;


