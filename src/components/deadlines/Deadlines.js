import React, { useEffect } from 'react';
import './css/deadlines.css';
import { useDispatch, useSelector } from 'react-redux';
import { GetDeadlines, NewDeadline } from '../../redux/deadlines';
import DeadlineCard from './DeadlineCard';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@material-ui/core';

export default function Deadlines() {
	const dispatch = useDispatch();
	const deadlines = useSelector((state) => state.deadlinesSlice.deadlines);

	useEffect(() => {
		GetDeadlines(dispatch);
	}, [deadlines]);

	return (
		<div className="deadlines">
			{/* display today */}
			<Accordion classsName="accordion">
				<AccordionSummary>
					<p>Today</p>
				</AccordionSummary>
				<AccordionDetails>
					<ul>
						{deadlines.map((deadline) => (
							<DeadlineCard key={deadline._id} deadline={deadline} />
						))}
					</ul>
				</AccordionDetails>
			</Accordion>
			<Accordion classsName="accordion">
				<AccordionSummary>
					<p>This Week</p>
				</AccordionSummary>
				<AccordionDetails>
					<p>Placeholder</p>
				</AccordionDetails>
			</Accordion>
			<Accordion classsName="accordion">
				<AccordionSummary>
					<p>Upcoming</p>
				</AccordionSummary>
				<AccordionDetails>
					<p>Placeholder</p>
				</AccordionDetails>
			</Accordion>
			{/* display this week  */}
			{/* // display upcoming  */}
			{/* // display completed */}
		</div>
	);
}
