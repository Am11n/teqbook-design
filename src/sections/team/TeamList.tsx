import data from '@/../product/sections/team/data.json'
import { TeamList as TeamListComponent } from './components/TeamList'

export default function TeamListPreview() {
  return (
    <TeamListComponent
      employees={data.employees}
      pendingInvites={data.pendingInvites}
      roles={data.roles}
      onView={(id) => console.log('View employee:', id)}
      onEdit={(id) => console.log('Edit employee:', id)}
      onInvite={(email, roleId) => console.log('Invite:', email, roleId)}
      onResendInvite={(id) => console.log('Resend invite:', id)}
      onRevokeInvite={(id) => console.log('Revoke invite:', id)}
      onUpdateRole={(employeeId, roleId) => console.log('Update role:', employeeId, roleId)}
      onUpdateStatus={(employeeId, status) => console.log('Update status:', employeeId, status)}
      onDelete={(id) => console.log('Delete employee:', id)}
      onFilter={(filters) => console.log('Filter:', filters)}
      onViewShifts={(employeeId) => console.log('View shifts:', employeeId)}
    />
  )
}

