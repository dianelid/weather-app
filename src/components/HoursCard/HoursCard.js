import React, { Component } from 'react'
import './HoursCard.scss'

const HourCards = props => {
	const result = props.dataState.map((item, index) => {
	  return <div key={index} className="hour-card">
				<div className="title-hour-card">{item.date.slice(item.date.indexOf(" ")+1 , item.date.lastIndexOf(":"))}</div>
				<div>Temperatura {item.temperature}&deg;</div>
				<div>Vento {item.temperature} km/h</div>
			</div>
    })
  
	return result
}

class HoursCard extends Component {
   state = {
		data: [{
			date: "", 
			temperature: "", 
		}],	
	}

  componentWillMount() {
	const proxy_url = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/5864/hours/72?token=c4914ccec5c2da1a8b08fd980bac3b68';
	
	fetch(proxy_url + url)
	  .then(result => result.json())
	  .then(result => {
		let newData = [];
		
		for(let i = 0; i < 24; i++){
			newData.push({
			  date: result.data[i].date_br,
			  temperature: result.data[i].temperature.temperature,
			}) 
		}
		
		this.setState({
		  data: newData,
        })
	  })
	  .catch(err => {
		console.log(err);
	  }); 
  }
  
  render() {
	const { data } = this.state
	
    return (
      <div id="hours-card" className="hours-card deactivate">
		<HourCards dataState={data}/>
	  </div>
    )
  }
}

export default HoursCard