import React, { Component } from 'react';
import axios from 'axios';

class SaladPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            SaladData : []
        }
    }
    componentDidMount() {
        axios.get('./data/menu-data.json').then(res => {
          this.setState({
            SaladData: res.data.SALAD
          });
        });
    }
    render() {
        return this.state.SaladData.map(data => (
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
export default SaladPageComponent;