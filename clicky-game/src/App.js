import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper'
import Card from './components/Card'
import Container from './components/Container'
import Column from './components/Column'
import Row from './components/Row'
import icons from './icons.json'
import CardContainer from './components/CardContainer';

function shuffleImages(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

class App extends Component {
  constructor(props) {
		super(props);
  
  this.state = {
    currentScore: 0,
    highScore: 0,
    icons: icons,
    selectedCards: [],
    message: "Click every image only one time to win!"
  }

  
  this.handleClick = position => {

    console.log(this.state.icons)
    console.log("click on: " + this.state.icons[( position - 1)].id)
    console.log("start position: " + position)
    console.log("This.state.icons[(position - 1 )].name: " + this.state.icons[(position - 1 )].name)
    position.push(this.selectedCards)
    console.log(this.selectedCards)

    this.setState({ icons: shuffleImages(icons)});
    




    // console.log(this.state.icons)
    // let currentIcon = this.state.icons[(id)].name;
    // console.log(currentIcon)
  }}





  //   this.state.selectedCards.forEach(icon => {
  //   if (icon.id === currentIcon) {
  //       chosen = true;
  //       console.log(icon.id)
  //     }
  //   })
  //   if (chosen){
  //     this.gameOver();
  //   }
  //   else {
  //     this.state.icons.forEach(icon => {
  //       if(icon.id === currentIcon ) {
  //         this.setState({selectedCards: [...this.state.selectedCards, icon]});

  //         this.updateScore();
  //         console.log(this.state.currentScore)
  //       }
  //     })
  //   }

  //   this.setState({ icons: shuffleImages(this.state.icons)});
  //   console.log("shuffling cards")
  // }
  // }
  // updateScore = () => {
  //   this.setState({ currentScore: this.state.currentScore + 1 })
  //   this.props.updateCurrentScore(this.state.currentScore)
  //   console.log("Score : " + this.state.currentScore)
  // }


  // endGame = () => {
  //   this.props.updateTopScore(this.state.score);
  //   // set the score back to 1 and the selected array to empty 
  //   this.setState({score: 1, selectedCards: []});
  //   // update the current score to 0
  //   this.props.updateCurrentScore(0);
  // }

  // updateCurrentScore = (newCount) => {
  //   // set the new count as the count
  //   this.setState({count: newCount});
  // }

  // // update the top score in the nav
  // updateTopScore = (newTop) => {
  //   // if the new top score is higher than the current
  //   if (newTop > this.state.topScore) {
  //     // then set the state but you have to subtract 1
  //     this.setState({topScore: newTop - 1})
  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Header 
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore}
        />
        <Container>
          <Row>
            <CardContainer>
            {this.state.icons.map(icon => (
              <Column size="md-3 sm-6">
                <Card
                  key={icon.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={icon.id}
                  image={icon.image}
                />
              </Column>
            ))}
            </CardContainer>
          </Row>
        </Container>
        
      </Wrapper>
    );
  }
}



export default App;