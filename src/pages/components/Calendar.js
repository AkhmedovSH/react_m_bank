import React, { useState } from 'react';

import { ReactComponent as ArrowLeft } from 'assets/icons/arrow_left.svg';

const Calendar = ({ onDateClick, currentDate, setData, data }) => {
	const [day, month, year] = currentDate.split("/").map(Number);
	var currentMonth = month - 1

	const daysInMonth = new Date(year, currentMonth + 1, 0).getDate();
	const firstDayOfMonth = new Date(year, currentMonth, 1).getDay();
	const lastDayOfMonth = new Date(year, currentMonth, daysInMonth).getDay();

	const prevMonthDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
	const prevMonth = new Date(year, currentMonth - 1);
	const daysInPrevMonth = new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0).getDate();

	const nextMonthDays = lastDayOfMonth === 0 ? 0 : 7 - lastDayOfMonth;

	const calendarDays = [];

	const years = Array.from({ length: 70 }, (_, index) => new Date().getFullYear() - 69 + index);
	const months = [
		'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
		'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
	];

	const [viewMode, setViewMode] = useState('date'); // date, month, year

	for (let i = prevMonthDays; i > 0; i--) {
		calendarDays.push({
			date: new Date(year, currentMonth - 1, daysInPrevMonth - i + 1),
			isCurrentMonth: false,
		});
	}

	// Добавляем дни текущего месяца
	for (let i = 1; i <= daysInMonth; i++) {
		calendarDays.push({
			date: new Date(year, currentMonth, i),
			isCurrentMonth: true,
		});
	}

	for (let i = 1; i <= nextMonthDays; i++) {
		calendarDays.push({
			date: new Date(year, currentMonth + 1, i),
			isCurrentMonth: false,
		});
	}

	const handleMonthClick = (month) => {
		const updatedDate = new Date(year, month, day);
		onDateClick(updatedDate, true);
	};

	const handleYearClick = (year) => {
		const updatedDate = new Date(year, month - 1, day);
		onDateClick(updatedDate, true);
	};


	return (
		<div>
			<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
				<div className="d-flex">
					<div className="month" onClick={() => setViewMode('month')}>
						{new Date(year, currentMonth).toLocaleString("ru", { month: "long" })}
					</div>
					<div className="year" onClick={() => setViewMode('year')}>
						{year}
					</div>
				</div>
			</div>

			{viewMode === 'date' &&
				<div>
					<div className="grid second">
						{["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, index) => (
							<div key={index} style={{ textAlign: "center", fontWeight: "bold" }}>
								{day}
							</div>
						))}
					</div>

					<div className="grid">
						{calendarDays.map(({ date, isCurrentMonth }, index) => (
							<div
								key={index}
								className={`date ${date.getDate() === day ? 'current' : ''} ${isCurrentMonth ? 'current-month' : ''}`}
								onClick={() => onDateClick(date)}
							>
								{date.getDate()}
							</div>
						))}
					</div>
				</div>
			}

			{viewMode === 'month' &&
				<>
					<div className="back" onClick={() => setViewMode('date')}>
						<ArrowLeft /> Переключить на даты
					</div>

					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
						{months.map((item, index) => (
							<div
								className={`month-item ${index === month - 1 ? 'current' : ''}`}
								key={index}
								onClick={() => handleMonthClick(index)}
							>
								{item}
							</div>
						))
						}
					</div>
				</>
			}

			{viewMode === 'year' &&
				<>
					<div className="back" onClick={() => setViewMode('date')}>
						<ArrowLeft /> Переключить на даты
					</div>

					<div className="years" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
						{years.map((item, index) => (
							<div
								className={`year-item ${item === year ? 'current' : ''}`}
								key={index}
								onClick={() => handleYearClick(item)}
							>
								{item}
							</div>
						))
						}
					</div>
				</>
			}
		</div>

	);
};

export default Calendar;
