import { SidebarGroupLabel } from '~/components/ui/sidebar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
} from '~/components/ui/sidebar'
import { SidebarUserFooter } from './sidebar/footer/user-footer'
import { SidebarOrgSwitcher } from './sidebar/header/organization-switcher'

export function AppSidebar() {
  return (
    <>
      <Sidebar
        variant="floating"
        side="left"
        collapsible="icon"
        className="group"
      >
        <SidebarHeader>
          <SidebarOrgSwitcher />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Workflows</SidebarGroupLabel>
            {/* <WorkflowMenu /> */}
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Quotes</SidebarGroupLabel>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarUserFooter />
        </SidebarFooter>
      </Sidebar>
    </>
  )
}
