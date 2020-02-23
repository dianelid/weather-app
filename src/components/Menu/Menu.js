import React, { Component } from 'react'
import './Menu.scss'

class Menu extends Component {
	render() {
		return (
			<div className="container-menus">
				<div className="main-menu">
					<div id="nowMenu" className="menu-item focus-menu">AGORA</div>
					<div id="hoursMenu" className="menu-item">POR HORA</div>
					<div id="15daysMenu" className="menu-item">7 DIAS</div>
					<div id="regionMenu" className="menu-item">POR REGIÃO</div>
				</div>
				<div id='sub-menu' className="sub-menu hidden">
					<div id="sulRegion" className="submenu-item">Sul</div>
					<div id="sudesteRegion" className="submenu-item">Sudeste</div>
					<div id="norteRegion" className="submenu-item">Norte</div>
					<div id="nordesteRegion" className="submenu-item">Nordeste</div>
					<div id="centro-oesteRegion" className="submenu-item">Centro-Oeste</div>
				</div>
			</div>
		)
	}
}

export default Menu