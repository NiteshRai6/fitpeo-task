import Activity from './components/Activity';
import Feedback from './components/Feedback';
import Layout from './components/Layout';
import Orders from './components/Orders';

export default function App() {

  return (
    <Layout>
      <Orders />
      <Activity />
      <Feedback />
    </Layout>
  )
}
