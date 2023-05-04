import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import {Details} from "./pages/Details.tsx";

function App() {

	return (
		<>
			<Header/>
			<Main>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/country/:name" element={<Details/>}/>
					{/*<Route path="*" element={<NotFound/>}/>*/}
				</Routes>
			</Main>
		</>
	)
}

export default App
