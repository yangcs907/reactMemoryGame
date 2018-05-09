import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import scoreBar from "./components/scoreBar";
import images from "./images.json";
import "./App.css";

class App extends Component {
  state = {
    message: "Welcome! Click on the images, but don't click the same one twice!",
    currentScore: 0,
    images: images,
    notSelectedImages: images
    };

  shuffle = array => {
          for (let i = array.length - 1; i > 0; i--) {
              let j = Math.floor(Math.random() * (i + 1));
              [array[i], array[j]] = [array[j], array[i]];
          }
      };

    selectImage = id => {
          const findImage = this.state.notSelectedImages.find(item => item.id === id);

          if(findImage === undefined) {
              this.setState({
                  message: "Oops you messed up!",
                  currentScore: 0,
                  images: images,
                  notSelectedImages: images
              });
          }
          else {
              const newImages = this.state.notSelectedImages.filter(item => item.id !== id);

              this.setState({
                  message: "Good job!",
                  currentSCore: this.state.currentScore + 1,
                  images: images,
                  notSelectedImages: newImages
              });
          }

          this.shuffle(images);
      };

  render() {
    return (
      <Wrapper>
        <scoreBar
          message={this.state.message}
          currentScore={this.state.currentScore}
          />
        {this.state.images.map(image => (
          <ImageCard
            selectImage={this.selectImage}
            id={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
