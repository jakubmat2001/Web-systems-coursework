import Header from '../../components/Header/header';
import SecondDisplayQuotes from '../../components/ProjectTwoComponents/ShowSecondQuotes/show-second-quotes';
import Footer from '../../components/Footer/footer';

function SecondViewOnlyPage() {
  return (
    <div className="container">
      <Header />
      <main id="detail">
        <SecondDisplayQuotes />
      </main>
      <Footer />
    </div>
  );
}

export default SecondViewOnlyPage;
