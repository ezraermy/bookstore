import { Routes, Route } from 'react-router-dom';
import Books from 'components/Books';
import Categories from 'components/Categories';
import NoMatch from 'components/NoMatch';
import Layout from 'components/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);
export default App;
