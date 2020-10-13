import React, { Component } from 'react';
import axios from 'axios';

class DessertPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            DessertData : []
        }
    }
    componentDidMount() {
        axios.get('./data/menu-data.json').then(res => {
          this.setState({
            DessertData: res.data.DESSERT
          });
        });
    }
    render() {
        return this.state.DessertData.map(data => (
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
export default DessertPageComponent;