# Customers Specification

## Overview
The Customers section provides a comprehensive customer directory for managing customer profiles, viewing booking history, and tracking preferences. Users can search customers, view detailed profiles, manage tags and notes, and control marketing consent settings.

## User Flows
- View customer list with search functionality to find customers by name, email, or phone
- View customer profile in a drawer or page showing contact information, booking history, tags, notes, and preferences
- View booking history as a timeline or table showing past and upcoming appointments with service details
- Add and manage tags on customer profiles for categorization and quick identification
- Add and edit notes on customer profiles to track preferences, special requests, or important information
- Toggle marketing consent and communication preferences for each customer
- Filter customers by tags or other criteria
- Create new customer profile when needed

## UI Requirements
- Customer list view with columns: name, email, phone, last booking date, tags, actions
- Search bar to filter customers by name, email, or phone number
- Customer profile drawer/page with sections: contact information, booking history timeline/table, tags, notes, marketing preferences
- Booking history displayed as timeline or sortable table showing date, service, employee, status
- Tags display with ability to add, remove, and filter by tags
- Notes section with ability to add, edit, and delete notes with timestamps
- Marketing consent toggle switch for email/SMS preferences
- Empty state when no customers exist with create CTA
- Loading state during data fetch or search operations
- Error state with retry functionality for failed operations
- Responsive design that adapts for mobile devices

## Configuration
- shell: true

