import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NewDeadline } from '../../redux/deadlines';
import { TextField, Button } from '@material-ui/core';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/dayjs';
import './css/deadline.dialog.css';

export default function DeadlineDialog({ setOpen }) {
	const dispatch = useDispatch();
	const [category, setCategory] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = (date) => {
		setDueDate(date);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const newDeadline = {
			userId: 123,
			category,
			description,
			dueDate,
			createdAt: Date.now(),
			complete: false,
		};
		NewDeadline(dispatch, newDeadline);
		setCategory('');
		setDescription('');
		setDueDate('');
		setOpen(false);
	};

	return (
		<div className="deadlinedialog">
			<form onSubmit={onSubmit}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<TextField
						variant="filled"
						label="Category"
						color="secondary"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="textfield"
						required
						fullWidth
					/>
					<TextField
						variant="filled"
						label="Description"
						color="secondary"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="textfield"
						required
						fullWidth
					/>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						label="Due Date"
						value={dueDate}
						onChange={handleDateChange}
					/>
					{/* <TextField
					variant="outlined"
					label="Due Date"
					color="secondary"
					value={dueDate}
					onChange={(e) => setDueDate(e.target.value)}
					className="textfield"
					required
					fullWidth
				/> */}
					<Button
						variant="contained"
						type="submit"
						color="primary"
						className="button"
						style={{ color: 'black', fontWeight: 'bold' }}
						fullWidth
					>
						Add
					</Button>
				</MuiPickersUtilsProvider>
			</form>
		</div>
	);
}
