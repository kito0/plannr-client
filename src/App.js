import './css/app.css';
import Sidebar from './components/sidebar/Sidebar';
import Deadlines from './components/deadlines/Deadlines';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './css/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<Sidebar />
				<Deadlines />
			</div>
		</ThemeProvider>
	);
}

export default App;
