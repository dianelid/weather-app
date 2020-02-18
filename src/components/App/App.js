import React, { Component } from 'react'
import './App.css'
import Menu from '../Menu/Menu'
import BaseCard from '../BaseCard/BaseCard'
import HoursCard from '../HoursCard/HoursCard'
import DaysCard from '../DaysCard/DaysCard'
import RegionCard from '../RegionCard/RegionCard'

class App extends Component {
	state = {
		focusedScene: 'base-card',
		focusedMenuItem: 0,
	}
	
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyPress);
	}
	
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}
	
	handleKeyPress = (event) => {    
	  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
		event.preventDefault();
		
		const menuItens = document.getElementsByClassName('menu-item');
		
		for (let i = 0; i < menuItens.length; i++) {
			if (menuItens[i].className === 'menu-item focus-menu') {
				menuItens[i].className = 'menu-item';
				this.focusItem(event.key, menuItens, i);
				break;
			}
		}
	  } else if (event.key === 'Enter') {
		  this.enterMenu();
	  }
	}
	
	focusItem = (key, menuItens, index) => {
		if (key === 'ArrowRight') {
			if (index+1 === menuItens.length) {
				index = 0;
			} else {
				index++;
			}
		} else {
			if (index-1 === -1) {
				index = menuItens.length-1;
			} else {
				index--;
			}
		}
		
		menuItens[index].className = 'menu-item focus-menu';
		
		this.setState({
		  focusedMenuItem: index,
		})
	}
	
	enterMenu = () => {
		document.getElementById(this.state.focusedScene).className = 'deactivate';
		  
		if (this.state.focusedMenuItem === 0) {
			this.focusScene('base-card');
		} else if (this.state.focusedMenuItem === 1) {
			this.focusScene('hours-card');
		} else if (this.state.focusedMenuItem === 2) {
			this.focusScene('days-card');
		} else if (this.state.focusedMenuItem === 3) {
			this.focusScene('region-card');
		}
	}
	
	focusScene = (scene) => {
		document.getElementById(scene).className = scene;
		this.setState({
		  focusedScene: scene,
		})
	}
	
  render() {
	return (
	  <div className="app">
		<div className="title">
			Weather App
			<span className="subtitle">Previsão do Tempo</span>
		</div>
		<Menu />
		<BaseCard />
		<HoursCard />
		<DaysCard />
		<RegionCard />
	  </div>
	)
  }
}

export default App