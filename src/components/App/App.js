import React, { Component } from 'react'
import './App.scss'
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
		document.addEventListener('keydown', this.handleKeyPress, true);
	}
	
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	}

	handleKeyPress = (event) => {  
	  if (event.keyCode === 39 || event.keyCode === 37) {
			event.preventDefault();
			this.menuLeftRight(event.keyCode);
	  } else if (event.keyCode === 13) {
			this.enterMenu();
	  }
	}
	
	menuLeftRight = (key) => {
		const classNameItem = 'menu-item';
		const classNameItemFocus = classNameItem + ' focus-menu'
		const menuItens = document.getElementsByClassName(classNameItem);
		
		menuItens[this.state.focusedMenuItem].className = classNameItem;
		this.updateIndexItemFocus(key, menuItens, this.state.focusedMenuItem);
		menuItens[this.state.focusedMenuItem].className = classNameItemFocus;
	}
	
	updateIndexItemFocus = (key, menuItens, index) => {
		const indexNewFocus = (key === 39 ? this.focusRightItem(menuItens.length, index) : this.focusLeftItem(menuItens.length, index))
		
		this.setState({
		  focusedMenuItem: indexNewFocus,
		})
	}
	
	focusRightItem = (menuItensLength, index) => {
		return index+1 === menuItensLength ? 0 : index+1
	}
	
	focusLeftItem = (menuItensLength, index) => {
		return index-1 === -1 ? menuItensLength-1 : index-1
	}
	
	enterMenu = () => {
		this.focus_unFocus(this.state.focusedScene, false);
		  
		if (this.state.focusedMenuItem === 0) {
			this.focus_unFocus('base-card', true);
		} else if (this.state.focusedMenuItem === 1) {
			this.focus_unFocus('hours-card', true);
		} else if (this.state.focusedMenuItem === 2) {
			this.focus_unFocus('days-card', true);
		} else if (this.state.focusedMenuItem === 3) {
			this.focus_unFocus('region-card', true);
		}
	}
	
	focus_unFocus = (scene, focusCmd) => {
		document.getElementById(scene).className = (focusCmd === true ? scene : 'deactivate')
		
		if (focusCmd) {
			this.setState({
			  focusedScene: scene,
			})
		}
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