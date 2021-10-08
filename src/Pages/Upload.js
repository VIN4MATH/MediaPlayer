import React, { Component } from "react";
import { BsCloudUpload } from 'react-icons/bs';
import { GrFormView } from 'react-icons/gr';
import Header from "../Component/Header Component/Header"
import "./upload.css";

class Upload extends React.Component {
    constructor() {
        super();
        this.state = {
            video: "",

            newVideo: ""


        }
        console.log("state:", this.state);
    }

    uploadedVideos() {
        this.setState({
            newvideo: this.state.video,

        })
        console.log("updatedState:", this.setState);

    }



    render() {
        return (
            <div>
                <Header/>
                <div className="Upload-page">
                    {/* <h1>This is the Upload Page</h1>
                <p>Here you can uplaod the videos</p>
                <span>And also view the uploaded videos</span> */}
                    <h1>Please Upload Your Videos</h1>
                    <div className="Upload-video">
                        <div className="Upload-btn" >

                            <label for="file" >
                                <i><BsCloudUpload /></i> To Upload
                            </label>
                            <input type="file" id="file" name="videos" placeholder="Upload Video"
                                onChange={(e) => { this.setState({ video: e.target.value }) }} />
                        </div>
                     

                        <div className="View-btn">

                            <button onClick={() => { this.uploadedVideos() }}>
                                <i><GrFormView /></i> To View Uploads
                            </button>

                        </div>


                    </div>
                    <div className="Upload-data">
                        <h1>Uploaded file:</h1>
                        <div className="upload-file">
                            <h1> {this.state.newvideo}</h1>
                        </div>

                    </div>


                </div>

            </div>

        )
    }
}



export default Upload;