import data from '@/../product/sections/business/data.json'
import { BusinessSettings as BusinessSettingsComponent } from './components/BusinessSettings'

export default function BusinessSettingsPreview() {
  return (
    <BusinessSettingsComponent
      salon={data.salon}
      openingHours={data.openingHours}
      paymentPlans={data.paymentPlans}
      subscription={data.subscription}
      invoices={data.invoices}
      branding={data.branding}
      notificationPreferences={data.notificationPreferences}
      onUpdateProfile={(salon) => console.log('Update profile:', salon)}
      onUpdateOpeningHours={(hours) => console.log('Update hours:', hours)}
      onUploadLogo={(file) => console.log('Upload logo:', file.name)}
      onRemoveLogo={() => console.log('Remove logo')}
      onUpdateBranding={(colors) => console.log('Update branding:', colors)}
      onUpgradePlan={(planId) => console.log('Upgrade plan:', planId)}
      onCancelSubscription={() => console.log('Cancel subscription')}
      onDownloadInvoice={(invoiceId) => console.log('Download invoice:', invoiceId)}
      onUpdateNotifications={(prefs) => console.log('Update notifications:', prefs)}
    />
  )
}

