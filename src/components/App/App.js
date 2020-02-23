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
		focusedMenu: true,
		region: 'sul'
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
			this.moveFocusMenu(event.keyCode);
	  } else if (event.keyCode === 38) {
			event.preventDefault();
			this.returnFocusToMenu();
	  } else if (event.keyCode === 13) {
		  if (this.state.focusedMenu)
			this.enterMenu();
		  else
			this.enterSubMenu();
	  }
	}
	
	moveFocusMenu = (key) => {
		const itens = this.unFocusMenuItem();
		
		this.updateIndexItemFocus(key, itens, this.state.focusedMenuItem);
		itens[this.state.focusedMenuItem].className = this.returnClassNameItem() + ' ' + this.returnClassNameItemFocus();
	}
	
	returnClassNameItem = () => {
		return this.state.focusedMenu ? 'menu-item' : 'submenu-item';
	}
	returnClassNameItemFocus = () => {
		return this.state.focusedMenu ? 'focus-menu' : 'focus-submenu';
	}
	
	unFocusMenuItem = () => {
		const itens = document.getElementsByClassName(this.returnClassNameItem());
		
		itens[this.state.focusedMenuItem].className = this.returnClassNameItem();
		return itens;
	}
	
	updateIndexItemFocus = (key, itens, index) => {
		const indexNewFocus = (key === 39 ? this.focusRightItem(itens.length, index) : this.focusLeftItem(itens.length, index))
		
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
		document.getElementById(this.state.focusedScene).className = 'deactivate';
		  
		if (this.state.focusedMenuItem === 0) {
			this.focusNewScene('base-card');
		} else if (this.state.focusedMenuItem === 1) {
			this.focusNewScene('hours-card');
		} else if (this.state.focusedMenuItem === 2) {
			this.focusNewScene('days-card');
		} else if (this.state.focusedMenuItem === 3) {
			this.focusNewScene('region-card');
			this.enterRegionCard();
		}
	}
	
	focusNewScene = (scene) => {
		document.getElementById(scene).className = scene
		
		this.setState({
		  focusedScene: scene,
		})
	}
	
	enterRegionCard = () => {
		document.getElementById('sub-menu').className = 'sub-menu';
		this.unFocusMenuItem();
		
		this.setState({
		  focusedMenu: false,
		})
		this.setState({
		  focusedMenuItem: 0,
		})
		
		const itens = this.unFocusMenuItem();
		itens[this.state.focusedMenuItem].className = this.returnClassNameItem() + ' ' + this.returnClassNameItemFocus();
	}
	
	returnFocusToMenu = () => {
		document.getElementById('sub-menu').className = 'sub-menu hidden';
		
		this.unFocusMenuItem();
		
		this.setState({
		  focusedMenu: true,
		})
		this.setState({
		  focusedMenuItem: 3,
		})
		
		const itens = this.unFocusMenuItem();
		itens[this.state.focusedMenuItem].className = this.returnClassNameItem() + ' ' + this.returnClassNameItemFocus();
	}
	
	enterSubMenu = () => {
		let reg = ''
		
		if (this.state.focusedMenuItem === 0) {
			reg = 'sul'
		} else if (this.state.focusedMenuItem === 1) {
			reg = 'sudeste'
		} else if (this.state.focusedMenuItem === 2) {
			reg = 'norte'
		} else if (this.state.focusedMenuItem === 3) {
			reg = 'nordeste'
		} else if (this.state.focusedMenuItem === 4) {
			reg = 'centro-oeste'
		}
		
		this.setState({
		  region: reg,
		})
	}
	
  render() {
	const reg = this.state.region
	
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
		<RegionCard region={reg} />
	  </div>
	)
  }
}

export default App