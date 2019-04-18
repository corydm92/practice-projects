import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import SongSearch from "./SongSearch";

const styles = {
	songDetail: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}
};

const App = () => {
	return (
		<div style={{ marginTop: "3em" }} className='ui container'>
			<SongSearch />
			<div style={{ marginTop: ".5em" }} className='ui grid'>
				<div className='row'>
					<div className='eight wide column'>
						<SongList />
					</div>
					<div style={styles.songDetail} className='eight wide column'>
						<SongDetail />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
