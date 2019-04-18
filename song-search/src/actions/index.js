export const songChoiceAction = song => {
	console.log(song);
	return {
		type: "SONG_CHOICE",
		payload: song
	};
};

export const searchTermAction = value => {
	return {
		type: "SONG_SEARCH",
		payload: value
	};
};
