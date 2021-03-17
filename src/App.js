import './css/app.css';
import Sidebar from './components/sidebar/Sidebar';
import Deadlines from './components/deadlines/Deadlines';

function App() {
	return (
		<div className="root">
			<Sidebar />
			<Deadlines />
		</div>
	);
}

export default App;
