import data from '@/../product/sections/customers/data.json'
import { CustomersList as CustomersListComponent } from './components/CustomersList'

export default function CustomersListPreview() {
  return (
    <CustomersListComponent
      customers={data.customers}
      bookings={data.bookings}
      onView={(id) => console.log('View customer:', id)}
      onEdit={(id) => console.log('Edit customer:', id)}
      onCreate={() => console.log('Create new customer')}
      onDelete={(id) => console.log('Delete customer:', id)}
      onAddTag={(customerId, tag) => console.log('Add tag:', customerId, tag)}
      onRemoveTag={(customerId, tag) => console.log('Remove tag:', customerId, tag)}
      onAddNote={(customerId, content) => console.log('Add note:', customerId, content)}
      onEditNote={(customerId, noteId, content) => console.log('Edit note:', customerId, noteId, content)}
      onDeleteNote={(customerId, noteId) => console.log('Delete note:', customerId, noteId)}
      onUpdateMarketingConsent={(customerId, consent) => console.log('Update consent:', customerId, consent)}
      onFilter={(filters) => console.log('Filter:', filters)}
    />
  )
}

