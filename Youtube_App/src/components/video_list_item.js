import React from 'react';


/*const VideoListItem ({video}) => {} is identical to below synatx which states that props 
has property name video and take its value and assign it to new variabl named video
*/
const VideoListItem = (props) => {
	const video = props.video;

	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;
	return ( 
		<li onClick = { () => props.onVideoClick(video) } className = "list-group-item"> 
			<div className = "video-list-media">
				<div className="media-left">
					<img className = "media-object" src = {imageUrl} />
				</div>
				<div className = "media-body">
					<div className = "media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;