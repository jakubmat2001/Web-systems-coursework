import Header from '../components/header';
import SecondDisplayQuotes from '../components/show-second-quotes';

function SecondViewOnlyPage() {
  return (
    <div className="container">
      <Header />
      <main id="detail">
        <SecondDisplayQuotes />
      </main>
    </div>
  );
}

export default SecondViewOnlyPage;
