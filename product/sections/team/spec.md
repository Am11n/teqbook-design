# Team Specification

## Overview
The Team section provides comprehensive employee management with role-based access control. Users can view team members, invite new employees via email, manage roles and permissions, and view employee profiles with working hours and availability.

## User Flows
- View team list with all employees showing name, role, status, and contact information
- Invite new team member by entering email address and selecting role (Admin, Manager, Staff)
- View pending invitations with options to resend or revoke invite
- View employee profile with name, contact details, role, status, and working hours/availability
- Edit employee profile to update name, contact information, role, or status
- Manage roles and permissions by assigning Admin, Manager, or Staff roles to employees
- Link to Shifts section to view and manage employee working hours and availability
- Filter team members by role or status
- Search team members by name or email

## UI Requirements
- Team list view with columns: name, email, role, status, actions
- Invite button that opens invite modal/form with email input and role selector
- Pending invitations section showing email, role, invite date, with resend and revoke actions
- Employee profile view/sidebar with: name, email, phone, role badge, status badge, working hours summary, link to Shifts
- Role badges for Admin, Manager, and Staff with distinct styling
- Status indicators for active, pending, inactive employees
- Filter dropdowns for role (Admin, Manager, Staff) and status (Active, Pending, Inactive)
- Search bar to filter team members by name or email
- Empty state when no team members exist with invite CTA
- Loading state during data fetch or invite operations
- Error state with retry functionality for failed operations
- Responsive design that adapts for mobile devices

## Configuration
- shell: true

