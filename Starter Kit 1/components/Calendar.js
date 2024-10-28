'use client';
import React, { useState } from 'react';

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' };
const monthsArr = Object.keys(months);
const now = new Date();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Calendar = props => {
    const { data, handleSetMood } = props;

    const now = new Date();
    const currentMonth = now.getMonth();

    const [selectedYear, setSelectedYear] = useState(now.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(Object.keys(months)[currentMonth]);

    const indexOfCurrMonth = Object.keys(months).indexOf(selectedMonth);
    const dateNow = new Date(selectedYear, indexOfCurrMonth, 1);

    // So, for example, if this is 2, it means a Tuesday
    const firstDayOfMonth = dateNow.getDay();

    const daysInMonth = new Date(selectedYear, indexOfCurrMonth + 1, 0).getDate();

    const handleIncrementMonth = () => {
        
    }

    return (
        <div>
            This is a calendar
        </div>
    )
}

export default Calendar;