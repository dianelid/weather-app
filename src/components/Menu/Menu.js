import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {
	render() {
		return (
			<div className="main-menu">
				<div id="nowMenu" className="menu-item focus-menu">AGORA</div>
				<div id="hoursMenu" className="menu-item">POR HORA</div>
				<div id="15daysMenu" className="menu-item">15 DIAS</div>
				<div id="regionMenu" className="menu-item">POR REGIÃO</div>
			</div>
		)
	}
}

export default Menu