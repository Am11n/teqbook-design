# Bookings Specification

## Overview
The Bookings section provides a comprehensive appointment management system with both list and calendar views. Users can create, edit, filter, and manage booking statuses to handle all salon appointments efficiently.

## User Flows
- View bookings in list format with sortable columns and status indicators
- Switch to calendar view to see appointments in a weekly/monthly grid layout
- Create new booking by selecting customer, service, employee, date/time, and optional notes
- Edit existing booking to modify any details including rescheduling
- Filter bookings by employee, service, date range, status, or customer
- Update booking status (pending, confirmed, in-progress, completed, cancelled, no-show) via quick actions
- Drag and drop bookings in calendar view to reschedule appointments
- View booking details in a detail panel or modal

## UI Requirements
- List view with columns: customer name, service, employee, date/time, duration, status
- Calendar view with weekly and monthly options, showing bookings as blocks with time slots
- Create/edit booking form with fields: customer (search/select), service (dropdown), employee (dropdown), date picker, time picker, duration, notes (optional)
- Filter bar with dropdowns for employee, service, status, and date range picker
- Status badges with color coding (pending=yellow, confirmed=blue, in-progress=purple, completed=green, cancelled=red, no-show=gray)
- Quick action buttons on list items and calendar blocks to change status
- Drag and drop functionality in calendar view for rescheduling
- Empty states for no bookings and filtered results
- Responsive design that adapts list/calendar views for mobile devices

## Configuration
- shell: true

