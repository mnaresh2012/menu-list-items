import React, { Component } from 'react';
import axios from 'axios';

class MainPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            MainData : []
        }
    }
    componentDidMount() {
        axios.get('./data/menu-data.json').then(res => {
          this.setState({
            MainData: res.data.MAIN
          });
        });
    }
    render() {
        return this.state.MainData.map(data => (
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
export default MainPageComponent;