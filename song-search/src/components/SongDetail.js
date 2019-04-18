import React from "react";
import { connect } from "react-redux";

const styles = {
	main: {
		textAlign: "center"
	}
};

const SongDetail = props => {
	if (!props.songDetail) {
		return <h2>Click A Song</h2>;
	}
	return (
		<div style={styles.main}>
			<h2>{props.songDetail.title}</h2>
			<h3>{props.songDetail.artist}</h3>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		songDetail: state.songChoice
	};
};

export default connect(mapStateToProps)(SongDetail);
