import React, {useState, useRef} from "react";
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Calculator = () => {
    const [dateFrom, setDateFrom] = useState(dayjs());
    const [dateTo, setDateTo] = useState(dayjs());
    const [showDifference, setShowDifference] = useState(false);
    const alertRef = useRef(null);

    const isEnteredDatesValid = (isDateFrom, date) => {
        if (isDateFrom) return date.valueOf() < dateTo.valueOf();
        return date.valueOf() >= dateFrom.valueOf();
    }

    const onDateChange = (isDateFrom) => (date) => {
        alertRef.current.classList.add('visually-hidden');
        const validDates = isEnteredDatesValid(isDateFrom, date);

        if (!validDates) alertRef.current.classList.remove('visually-hidden');
        isDateFrom ? setDateFrom(date) : setDateTo(date);
        setShowDifference(validDates);
    }

    const millisecondsBetween = dateTo.valueOf() - dateFrom.valueOf();
return (
<div className="text-center">
    <h2 className="lead mt-5">Here you can choose two dates and get difference in time between them</h2>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker value={dateFrom} onAccept={onDateChange(true)} closeOnSelect label="Select start date" className="m-5"/>
        <DateTimePicker value={dateTo} onAccept={onDateChange(false)} closeOnSelect label="Select end date" className="m-5"/>
    </LocalizationProvider>
    <div className="alert alert-danger visually-hidden" role="alert" ref={alertRef}>
        It will be better if start date is less that end date, though...
    </div>

    {
        showDifference && 
        <div className='w-50 mx-auto d-flex justify-content-between'>
            <div className="fw-medium">Difference in time between two dates is:</div>
            <div className="text-end">
                <p className="fw-medium">{millisecondsBetween.toLocaleString()} milliseconds.</p>
                <p className="fw-medium">{Math.floor(millisecondsBetween / 1000).toLocaleString()} seconds.</p>
                <p className="fw-medium">{Math.floor(millisecondsBetween / 1000 / 60).toLocaleString()} minutes.</p>
                <p className="fw-medium">{Math.floor(millisecondsBetween / 1000 / 60 / 60).toLocaleString()} hours.</p>
                <p className="fw-medium">{Math.floor(millisecondsBetween / 1000 / 60 / 60 / 24).toLocaleString()} days.</p>
            </div>
        </div>
    }
</div>
)
}
export default Calculator;