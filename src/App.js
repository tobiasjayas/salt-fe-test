import './App.css';
import Layout from './lib/layout';
import Homepage from './lib/pages/homepage';

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
