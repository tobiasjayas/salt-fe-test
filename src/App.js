import './App.css';
import Layout from './lib/layout';
import Homepage from './lib/pages/homepage';
import "@fontsource/rubik";

const App = () => {
  return (
    <div>
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
