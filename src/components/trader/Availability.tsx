import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function Availability({ traderId }: { traderId: number }) {
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-blue-600" />
            Select Date
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {days.map((day) => (
              <div
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`p-4 text-center border rounded-lg cursor-pointer transition-colors ${
                  selectedDate === day
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="font-semibold">{day}</div>
                <div className="text-sm">Mar 12</div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Select Time
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <div
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 text-center border rounded-lg cursor-pointer transition-colors ${
                  selectedTime === time
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Button */}
      <button
        className={`mt-8 w-full py-3 rounded-lg transition-colors ${
          selectedDate && selectedTime
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
        disabled={!selectedDate || !selectedTime}
      >
        Book Appointment
      </button>
    </div>
  );
}