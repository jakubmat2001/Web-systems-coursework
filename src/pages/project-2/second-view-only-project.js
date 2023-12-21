import Header from '../../components/Header/header';
import SecondDisplayQuotes from '../../components/ProjectTwoComponents/ShowSecondQuotes/show-second-quotes';
import Footer from '../../components/Footer/footer';

function SecondViewOnlyPage() {
  return (
    <div className="container">
      <Header />
      <main className='standard-main'>
      <h1>Second Project Quotes (View Only)</h1>
        <SecondDisplayQuotes />
      </main>
      <Footer />
    </div>
  );
}

export default SecondViewOnlyPage;
