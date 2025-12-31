# Business Specification

## Overview
The Business section provides comprehensive salon settings management including business profile, opening hours, branding, billing and subscription plans, and notification preferences. Users can configure all aspects of their salon's business information and system settings in one centralized location.

## User Flows
- View and edit business profile with name, address, contact information, and organizational details
- Configure opening hours for each day of the week with ability to set different hours or mark days as closed
- Upload and manage business logo with preview
- View color palette preview showing current branding colors
- View current subscription plan with features and limits
- View billing history with invoices list and download options
- Upgrade or change subscription plan with clear CTA and feature comparison
- Configure notification preferences with email and SMS toggles for different event types
- Save changes with validation and confirmation

## UI Requirements
- Tabbed or sectioned layout organizing: Business Profile, Opening Hours, Branding, Billing & Plan, Notifications
- Business profile form with fields: business name, address (street, city, state, zip), phone, email, website, tax ID (optional)
- Opening hours editor with day-of-week rows, time pickers for open/close, closed checkbox, and save button
- Branding section with logo upload area, preview, and color palette preview showing primary/secondary/neutral colors
- Billing section showing current plan name, features, usage limits, renewal date, and upgrade CTA button
- Invoices table/list with columns: invoice number, date, amount, status, download action
- Notification preferences with grouped toggles (Email/SMS) for: booking reminders, cancellations, new bookings, payment receipts, reports
- Empty states for invoices list when no invoices exist
- Loading state during save operations or data fetch
- Error state with retry functionality for failed operations
- Responsive design that adapts for mobile devices

## Configuration
- shell: true

