import React from "react";
import { connect } from "react-redux";
import { songChoiceAction } from "../actions";

const styles = {
	main: {
		cursor: "pointer"
	},
	header: {
		fontSize: "1.5em",
		padding: ".25em"
	},
	description: {
		position: "relative",
		left: ".5em",
		padding: ".25em"
	}
};

const SongList = props => {
	const renderList = props.songList.map(song => {
		return (
			<div className='item'>
				<div
					onClick={() => props.songChoiceAction(song)}
					style={styles.main}
					className='content'
				>
					<div style={styles.header} className='header'>
						{song.title}
					</div>
					<div style={styles.description} className='description'>
						by {song.artist}
					</div>
				</div>
			</div>
		);
	});

	return <div className='ui relaxed divided list'>{renderList}</div>;
};

const mapStateToProps = state => {
	return {
		songList: state.songList
	};
};

export default connect(
	mapStateToProps,
	{ songChoiceAction }
)(SongList);
