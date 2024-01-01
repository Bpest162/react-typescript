import { Routing } from "pages";
import { withProviders } from './providers'
import Header  from 'widgets/header';
import './index.sass';
import Footer from 'widgets/footer';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Routing /> 
      <Footer/>
      
    </div>
  );
}

export default withProviders(App);