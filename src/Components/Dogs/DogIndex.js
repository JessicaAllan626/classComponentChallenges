import React, {Component} from 'react';

class DogChallenge extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            results: []
        }
        this.returnDog = this.returnDog.bind(this)
    }

async returnDog(){
    try{
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let json = await res.json()
        
        this.setState({
            loaded: true,
            results: json.message
        })
    } catch (err) {
        console.log(err);
    }
}

componentDidMount() {
    this.returnDog()
}

render (){
    return(
        <div>
            <button onClick={this.returnDog}>New Dog</button>
            {this.state.loaded ? <img src={this.state.results} /> : <p>"Loading"</p>}
        </div>
    )
}
}

export default DogChallenge;