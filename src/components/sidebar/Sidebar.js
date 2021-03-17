import React from 'react';
import './css/sidebar.css';
import SidebarOption from './SidebarOption';
import { IconButton } from '@material-ui/core';
import { EventAvailable } from '@material-ui/icons';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<h2 className="title">Plannr</h2>
			</div>
			<SidebarOption active Icon={EventAvailable} text="Deadlines" />
		</div>
	);
}
