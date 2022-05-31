import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LongPoll from './LongPoll';
import ShortPoll from './ShortPoll';
import Messenger from './Messenger';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Container>
					<Routes>
						<Route path='/long' element={<LongPoll />} />
						<Route path='/short' element={<ShortPoll />} />
						<Route path="/messenger" element={<Messenger />} />
					</Routes>
				</Container>
			</main>
		</Router>
	);
}

export default App;
