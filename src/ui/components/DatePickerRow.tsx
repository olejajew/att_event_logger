import React, { useState } from 'react';
import { DatePicker, Button, Space, message } from 'antd';
import { Moment } from 'moment';
import { postDateRange } from '../rest/requests';

const { RangePicker } = DatePicker;

function convertDate(date: Moment): string {
    return date.format('YYYY-MM-DD');
}

const DateRangePicker: React.FC = () => {
    const [dates, setDates] = useState<[Moment | null, Moment | null] | null>(null);

    const handleDateChange = (dates: [Moment | null, Moment | null] | null) => {
        setDates(dates);
    };

    const handleDownloadFull = async () => {
        download("full")
    };

    const handleDownloadShort = async () => {
        download("short")
    };

    const download = async (type: string) => {
        if (dates) {
            const [start, end] = dates;
            if (start && end) {
                const baseUrl = 'http://45.77.193.203:7070/utils/analytics/download';
                const startDate = convertDate(start);
                const endDate = convertDate(end);
                const url = `?type=${type}&${baseUrl}date_from=${startDate}&date_to=${endDate}`;
                window.open(url)
            }
        }
    };

    return (
        <Space direction="horizontal">
            <RangePicker onChange={handleDateChange} />
            <Button type="primary" onClick={handleDownloadFull} disabled={!dates || !dates[0] || !dates[1]}>
                Download Full
            </Button>
            <Button type="primary" onClick={handleDownloadFull} disabled={!dates || !dates[0] || !dates[1]}>
                Download Short
            </Button>
        </Space>
    );
};

export default DateRangePicker;
