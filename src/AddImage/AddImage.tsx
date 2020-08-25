import React from "react";
import "./image.css";
import ImageStateInterface from "./ImageStateInterface";

class AddImage extends React.Component {
  state: ImageStateInterface;
  fileInput: any;

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
    };
  }

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    let file = event.target.files![0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  deleteImage = () => {
    this.setState({ imagePreviewUrl: " " });
  };

  render() {
    let { imagePreviewUrl } = this.state;

    return (
      <div className="image-container">
        <img src={imagePreviewUrl} alt="" />
        <button className="add-photo" onClick={() => this.fileInput.click()}>
          Add photo
        </button>
        <button onClick={this.deleteImage} className="delete">
          X
        </button>
        <input
          id="add-photo"
          className="fileInput"
          type="file"
          onChange={(event) => this.handleImageChange(event)}
          ref={(fileInput) => (this.fileInput = fileInput)}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}

export default AddImage;
