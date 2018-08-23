import React, { Component } from "react";
import YoutubeEmbedVideo from "youtube-embed-video";
import './Video.css';

class Video extends Component{
    render() {
        return (

            <YoutubeEmbedVideo videoId="TByMfPNK32c" suggestions={false} className="ww-video"/>
        )}
    }

export default Video;

