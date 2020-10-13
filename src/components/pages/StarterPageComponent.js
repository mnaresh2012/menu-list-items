import React, { Component } from 'react';
import axios from 'axios';

class StarterPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            StarterData : []
        }
    }
    componentDidMount() {
        axios.get('./data/menu-data.json').then(res => {
          this.setState({
            StarterData: res.data.STARTER
          });
        });
    }
    render() {
        return this.state.StarterData.map(data => (
            <div className="menuItem" key = {data.imgPath}>
                <div className="imgContainer">
                    <img src={data.imgPath} />
                </div>
                <div className="itemDetail">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
            </div>
        ))
    }
}
export default StarterPageComponent;