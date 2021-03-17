import React from 'react';
import './css/sidebar.css';
import SidebarOption from './SidebarOption';
import { IconButton } from '@material-ui/core';
import {
	AccountBalanceWallet,
	EventAvailable,
	Notifications,
} from '@material-ui/icons';

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<img src={process.env.PUBLIC_URL + '/logo.png'} className="image" />
				<h2 className="title">Plannr</h2>
			</div>
			<SidebarOption active Icon={EventAvailable} text="Deadlines" />
			<SidebarOption Icon={Notifications} text="Reminders" />
			<SidebarOption Icon={AccountBalanceWallet} text="Budget" />
		</div>
	);
}
