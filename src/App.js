import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateForm from './components/CreateForm';
import Display from './components/Display';
import Edit from './components/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Display />} />
          <Route path="/new" element={<CreateForm />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<><h1>Error</h1></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
