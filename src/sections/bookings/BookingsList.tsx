import data from '@/../product/sections/bookings/data.json'
import { BookingsList as BookingsListComponent } from './components/BookingsList'

export default function BookingsListPreview() {
  return (
    <BookingsListComponent
      bookings={data.bookings}
      services={data.services}
      employees={data.employees}
      customers={data.customers}
      onView={(id) => console.log('View booking:', id)}
      onEdit={(id) => console.log('Edit booking:', id)}
      onDelete={(id) => console.log('Delete booking:', id)}
      onCreate={() => console.log('Create new booking')}
      onStatusChange={(id, status) => console.log('Status change:', id, status)}
      onReschedule={(id, newDate, newTime) => console.log('Reschedule:', id, newDate, newTime)}
      onFilter={(filters) => console.log('Filter:', filters)}
      onViewChange={(view) => console.log('View change:', view)}
    />
  )
}

