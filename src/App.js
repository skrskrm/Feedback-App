import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header text='Feedback App'/>
      <div className="container">
        <Routes>
          <Route path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App