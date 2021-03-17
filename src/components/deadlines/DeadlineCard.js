import React from 'react';
import './css/deadline.card.css';
import { useDispatch } from 'react-redux';
import { EditDeadline, DeleteDeadline } from '../../redux/deadlines';
import { IconButton, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

export default function DeadlineCard({ deadline }) {
	const dispatch = useDispatch();

	return (
		<div className="deadlinecard">
			<div className="card_root">
				<div className="card_content">
					<Typography className="content_description">
						{deadline.description}
					</Typography>
					<Typography className="content_category">
						{deadline.category}
					</Typography>
					<Typography variant="caption" className="content_date">
						{deadline.dueDate.slice(0, 10)}
					</Typography>
				</div>
				<div className="card_buttons">
					<IconButton className="button" color="secondary">
						<Edit />
					</IconButton>
					<IconButton
						onClick={() => {
							DeleteDeadline(dispatch, deadline._id);
						}}
						className="button"
						color="secondary"
					>
						<Delete />
					</IconButton>
				</div>
			</div>
		</div>
	);
}
