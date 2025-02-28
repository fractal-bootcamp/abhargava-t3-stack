import { AppSidebar } from '~/app/_common/components/sidebar'
import { SidebarProvider } from '~/components/ui/sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </div>
  )
}
