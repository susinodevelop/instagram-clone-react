import Header from '../components/header';
import Footer from '../components/footer';
import PageContent from '../components/page-content';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';
import './style.css';

export const App = () => {
  return (
    <>
      <Header />
      <PageContent >
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/profile' Component={Profile} />
        </Routes>
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
