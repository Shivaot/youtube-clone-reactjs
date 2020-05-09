import React, { Component } from "react";
import { Grid,LinearProgress } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./containers/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from './components/VideoList/VideoList';

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
		loading: false
	}
	componentDidMount() {
		youtube
			.get("search", {
				params: {
					part: "snippet",
					maxResults: 5,
					key: "AIzaSyAAgtl0Fq3ItiQlpCw-v4IYYoA384KY7Bk",
					q: "Microservices"
				},
			})
			.then((response) => this.setState({videos: response.data.items,selectedVideo: response.data.items[0]}))
			.catch((error) => console.log(error));
	
	}
	searchHandler = (event,searchTerm) => {
		event.preventDefault();
		this.setState({loading: true});
		youtube
			.get("search", {
				params: {
					part: "snippet",
					maxResults: 5,
					key: "AIzaSyAAgtl0Fq3ItiQlpCw-v4IYYoA384KY7Bk",
					q: searchTerm
				},
			})
			.then((response) => this.setState({loading:false,videos: response.data.items,selectedVideo: response.data.items[0]}))
			.catch((error) => console.log(error));
	
	};
	videoClickedHandler = (video) => this.setState({selectedVideo: video})
	render() {
		return (
			<Grid justify="center" container spacing={10}>
				<Grid item xs={11}>
					<Grid container spacing={10}>
						<Grid item xs={12}>
							<SearchBar onSubmitHandler={this.searchHandler} />
						</Grid>
						<Grid item xs={6}>
							<VideoDetail video={this.state.selectedVideo}/>
						</Grid>
						<Grid item xs={6}>
							<VideoList videos={this.state.videos} videoClicked={this.videoClickedHandler}/>
						</Grid> 
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default App;
