import React, { useEffect, useState } from 'react';
import './css/deadlines.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetDeadlines } from '../../redux/deadlines';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Dialog,
	IconButton,
	Slide,
} from '@material-ui/core';
import { PostAdd } from '@material-ui/icons';
import DeadlineCard from './DeadlineCard';
import DeadlineDialog from './DeadlineDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function Deadlines() {
	const dispatch = useDispatch();
	const deadlines = useSelector((state) => state.deadlinesSlice.deadlines);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const date = new Date();
	let dateString = '';
	if (date.getMonth() >= 10) {
		dateString +=
			date.getFullYear() +
			'-' +
			parseInt(date.getMonth() + 1) +
			'-' +
			date.getDate();
	} else {
		dateString +=
			date.getFullYear() +
			'-0' +
			parseInt(date.getMonth() + 1) +
			'-' +
			date.getDate();
	}

	useEffect(() => {
		GetDeadlines(dispatch);
	}, [deadlines, dispatch]);

	return (
		<div className="deadlines">
			{/* display today */}
			<p>{dateString}</p>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
			>
				<DeadlineDialog setOpen={setOpen} />
			</Dialog>
			<IconButton
				color="inherit"
				className="newdeadline__button"
				onClick={handleClickOpen}
			>
				<PostAdd />
			</IconButton>
			<Accordion className="accordion">
				<AccordionSummary>
					<p>Today</p>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{deadlines
							.filter(
								(deadline) => deadline.dueDate.slice(0, 10) === dateString
							)
							.map((filteredDeadline) => (
								<DeadlineCard
									key={filteredDeadline._id}
									deadline={filteredDeadline}
								/>
							))}
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion className="accordion">
				<AccordionSummary>
					<p>Next Seven Days</p>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{deadlines
							.filter(
								(deadline) =>
									(parseInt(deadline.dueDate.slice(5, 7)) >
										parseInt(dateString.slice(5, 7)) &&
										parseInt(deadline.dueDate.slice(8, 10)) +
											parseInt(dateString.slice(8, 10)) <=
											38 &&
										parseInt(deadline.dueDate.slice(8, 10)) +
											parseInt(dateString.slice(8, 10)) >=
											31) ||
									(parseInt(deadline.dueDate.slice(5, 7)) ===
										parseInt(dateString.slice(5, 7)) &&
										parseInt(deadline.dueDate.slice(8, 10)) -
											parseInt(dateString.slice(8, 10)) <=
											7)
							)
							.map((filteredDeadline) => (
								<DeadlineCard
									key={filteredDeadline._id}
									deadline={filteredDeadline}
								/>
							))}
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion className="accordion">
				<AccordionSummary>
					<p>Upcoming</p>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{deadlines
							.filter(
								(deadline) =>
									(parseInt(deadline.dueDate.slice(5, 7)) >
										parseInt(dateString.slice(5, 7)) &&
										parseInt(deadline.dueDate.slice(8, 10)) +
											30 -
											parseInt(dateString.slice(8, 10)) >
											7) ||
									(parseInt(deadline.dueDate.slice(5, 7)) ===
										parseInt(dateString.slice(5, 7)) &&
										parseInt(deadline.dueDate.slice(8, 10)) -
											parseInt(dateString.slice(8, 10)) >
											7)
							)
							.map((filteredDeadline) => (
								<DeadlineCard
									key={filteredDeadline._id}
									deadline={filteredDeadline}
								/>
							))}
					</ul>
				</AccordionDetails>
			</Accordion>
			{/* display this week  */}
			{/* // display upcoming  */}
			{/* // display completed */}
		</div>
	);
}
