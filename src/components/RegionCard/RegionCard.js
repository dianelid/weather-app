import React, { Component } from 'react'
import './RegionCard.css'

class RegionCard extends Component {
	state = {
		region: "nordeste",
		data: {
			regionImage: "", 
			regiontext: "", 
		},	
	}

  componentDidMount() {
	const proxy_url = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/region/'+this.state.region+'?token=c4914ccec5c2da1a8b08fd980bac3b68';
	
	fetch(proxy_url + url)
	  .then(result => result.json())
	  .then(result => {
		this.setState({
		  data: {
			  regionImage: result.data[0].image,
			  regiontext: result.data[0].text,
			},
        })
	  })
	  .catch(err => {
		console.log(err);
	  }); 
  }
  
  render() {
	const { data } = this.state
	
    return (
      <div id="region-card" className="region-card deactivate">
		<img className="region-image" src={data.regionImage} alt=""/>
		<div className="region-text">{data.regiontext}</div>
      </div>
    )
  }
}

export default RegionCard