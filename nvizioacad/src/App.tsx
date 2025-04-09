import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './Pages/SignUpForm';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import NotFound from './Pages/NotFound';
import './App.css';
import AcademyPage from './Pages/AcademyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Optional: Navigation Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-indigo-600">Nvizio</h1>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path='/academypage' element={<AcademyPage/>}/>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main> 
      </div>
    </Router>
  );
}

export default App;