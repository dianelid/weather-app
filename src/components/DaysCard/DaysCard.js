import React, { Component } from 'react'
import './DaysCard.scss'

const DayCards = props => {
	const result = props.dataState.map((item, index) => {
	  return <div key={index} className="day-card">
				<div className="title-day-card">{item.date}</div>
				<img className="day-icon" src={"./realistic/250px/"+item.icon+".jpg"} alt=""/>
				<div>{item.condition}
					<div>Min {item.min}&deg;</div>
					<div>Max {item.max}&deg;</div>
				</div>
			</div>
    })
  
	return (
		result
	)
}

class DaysCard extends Component {
	state = {
		data: [{
			date: "", 
			condition: "", 
			icon : "", 
			min: "", 
			max: "",
		}],	
	}

  componentWillMount() {
	const proxy_url = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/5864/days/15?token=c4914ccec5c2da1a8b08fd980bac3b68';
	
	fetch(proxy_url + url)
	  .then(result => result.json())
	  .then(result => {
		let newData = [];
		
		for(let i = 0; i < 7; i++){
			newData.push({
			  date: result.data[i].date_br,
			  icon: result.data[i].text_icon.icon.day,
			  condition: result.data[i].text_icon.text.pt,
			  min: result.data[i].temperature.min,
			  max: result.data[i].temperature.max,
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
      <div id="days-card" className="days-card deactivate">
		<DayCards dataState={data}/>		
	  </div>
    )
  }
}

export default DaysCard