import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const navigationItems = [
    { label: 'Bookings', href: '/bookings', isActive: true },
    { label: 'Team', href: '/team' },
    { label: 'Customers', href: '/customers' },
    { label: 'Business', href: '/business' },
    { label: 'Settings', href: '/settings' },
  ]

  const user = {
    name: 'Alex Morgan',
    avatarUrl: undefined,
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      user={user}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogout={() => console.log('Logout')}
    >
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-slate-50">Content Area</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Section content will render here. This is a preview of the application shell layout.
        </p>
      </div>
    </AppShell>
  )
}

