import React from "react";
import { connect } from "react-redux";

import { searchTermAction } from "../actions";

const SongSearch = props => {
	console.log(props);
	return (
		<div class='ui fluid icon input'>
			<input
				onChange={e => props.searchTermAction(e.target.value)}
				value={props.searchTerm}
				type='text'
				placeholder='Search for a song...'
			/>
			<i class='search icon' />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		searchTerm: state.searchTerm
	};
};

export default connect(
	mapStateToProps,
	{ searchTermAction }
)(SongSearch);
