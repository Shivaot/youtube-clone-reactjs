import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
	state = {
		searchTerm: "",
	};
	changeHandler = (event) => this.setState({ searchTerm: event.target.value });
    render() {
		return (
			<Paper elevation={6} style={{ padding: "25px" }}>
				<form onSubmit={(event) => (this.props.onSubmitHandler(event,this.state.searchTerm))}>
					<TextField
						fullWidth
						variant="outlined"
						label="Search..."
						onChange={this.changeHandler}
					/>
				</form>
			</Paper>
		);
	}
}

export default SearchBar;
