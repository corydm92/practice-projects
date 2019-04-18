import { combineReducers } from "redux";

const initialState = [
	{ title: "Noise feat. Lelah", artist: "Denis Horvat" },
	{ title: "I Feel It", artist: "Leftwing : Kody" },
	{ title: "Start The Party", artist: "George Smeddles" },
	{ title: "Be Good To Me", artist: "Cloonee" },
	{ title: "I'm Not Alone", artist: "CamelPhat, Calvin Harris" }
];

// CLEANS UP SONG_SEARCH
const searchCleaner = str => {
	console.log(str.trim().toLowerCase());
	return str.trim().toLowerCase();
};

const songListReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SONG_SEARCH":
			return [...initialState].filter(
				song =>
					searchCleaner(song.title).includes(searchCleaner(action.payload)) ===
						true ||
					searchCleaner(song.artist).includes(searchCleaner(action.payload)) ===
						true
			);
		default:
			return state;
	}
};

const songChoiceReducer = (songChoice = null, action) => {
	switch (action.type) {
		case "SONG_CHOICE":
			return action.payload;
		default:
			return songChoice;
	}
};

// const searchTermReducer = (searchTerm = null, action) => {
// 	switch (action.type) {
// 		case "SONG_SEARCH":
// 			return action.payload;
// 		default:
// 			return searchTerm;
// 	}
// };

export default combineReducers({
	songList: songListReducer,
	songChoice: songChoiceReducer
	// searchTerm: searchTermReducer
});
