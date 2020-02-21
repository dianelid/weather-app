import React, { Component } from 'react'
import './BaseCard.scss'

class BaseCard extends Component {
	state = {
		data: {
			temperature: "", 
			condition: "", 
			icon : "", 
			sensation : "", 
			humidity: "", 
			pressure: "", 
			wind_velocity: "", 
		},	
	}

  componentDidMount() {
	const proxy_url = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/5864/current?token=c4914ccec5c2da1a8b08fd980bac3b68';
	
	fetch(proxy_url + url)
	  .then(result => result.json())
	  .then(result => {
		this.setState({
		  data: {
			  temperature: result.data.temperature,
			  condition: result.data.condition,
			  icon: result.data.icon,
			  sensation: result.data.sensation,
			  humidity: result.data.humidity,
			  pressure: result.data.pressure,
			  wind_velocity: result.data.wind_velocity,
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
      <div id="base-card" className="base-card">
		<div className="title-base-card">
			TEMPO AGORA EM
			<div className="locale">Natal, RN</div>
		</div>
		<div className="temperature-box">
			<img className="moment-icon" src={"./realistic/250px/"+data.icon+".jpg"} alt=""/>
			<div className="moment-temperature">
				<div className="temperature">{data.temperature}&deg;</div>
				<div>{data.condition}</div>
			</div>
		</div>
		<span className="predictions">
			Sensação
			<div>{data.sensation}&deg;</div>
		</span>
		<span className="predictions">
			Umidade
			<div>{data.humidity}%</div>
		</span>
		<span className="predictions">
			Pressão
			<div>{data.pressure} hPa</div>
		</span>
		<span className="predictions">
			Vento
			<div>{data.wind_velocity} km/h</div>
		</span>
      </div>
    )
  }
}

export default BaseCard