import { withProviders } from "app/providers";
import './index.scss';
import Header from "widgets/header";
import { Routing } from "pages/index";
import Footer from "widgets/footer";

const App = () => {
    return (
      <div className="app">
          <Header/>
          <Routing/>
          <Footer/>
      </div>
    );
  }
  
export default withProviders(App);