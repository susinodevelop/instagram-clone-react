import Header from '../components/header';
import Footer from '../components/footer';
import PageContent from '../components/page-content';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import './style.css';

export const App = () => {
  return (
    <>
      <Header />
      <PageContent >
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
