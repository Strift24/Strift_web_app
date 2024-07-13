// FormPropsDateTimePickers.js
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function FormPropsDateTimePickers({ value, onChange }) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DemoContainer components={['DateTimePicker']} >
          <DateTimePicker
            value={value}
            onChange={onChange}
            label="Drop date and time"
            name="startDateTime"
            className=' shadow appearance-none border rounded-lg h-[56px] w-full py-2 px-3 text-gray-900 leading-tight focus:outline-yellow-400 focus:shadow-outline'
          />
        </DemoContainer>
      </LocalizationProvider>
    );
  }
  