import React from 'react';
import './css/sidebar.css';
import SidebarOption from './SidebarOption';
import { IconButton } from '@material-ui/core';
import { EventAvailable } from '@material-ui/icons';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<h2>Plannr</h2>
			<SidebarOption active Icon={EventAvailable} text="Deadlines" />
		</div>
	);
}
