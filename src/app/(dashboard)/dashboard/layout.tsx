import { AppSidebar } from '~/app/_common/components/sidebar'
import { SidebarProvider } from '~/components/ui/sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen dark:bg-gray-950 dark:text-white">
      <SidebarProvider>
        <AppSidebar />
        <div className="p-4">{children}</div>
      </SidebarProvider>
    </div>
  )
}
