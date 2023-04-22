import Header from './components/header';
import SubHeader from './components/subHeader';
import UserStatistics from './components/userStatistics';
import WalletStatistics from './components/walletStatistics';


import './style/App.scss';
import './style/header.scss';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <UserStatistics />
      <WalletStatistics />
    </div>
  );
}

export default App;
