import AddKontak from "./components/AddKontak";
import ListKontak from "./components/ListKontak";

function App() {
    return (
		<div style={{padding: "30px"}}>
			<h2>Aplikasi Kontak</h2>
			<hr />
			<AddKontak />
			<hr />
			<ListKontak />
		</div>
	);
}

export default App;
