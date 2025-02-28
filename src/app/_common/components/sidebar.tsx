'use client'

import { SignedIn, UserButton } from '@clerk/nextjs'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
} from '~/components/ui/sidebar'
import { userInformation } from '../hooks/userInfo'

export function AppSidebar() {
  const { user } = userInformation()
  return (
    <Sidebar variant="floating" side="right">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SignedIn>
          <button
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition-colors"
            onClick={() => {
              // This was made by Claude 3.7
              // Find the UserButton's internal button element and click it
              const userButtonElement = document.querySelector(
                '.cl-userButtonTrigger',
              )
              if (userButtonElement) {
                ;(userButtonElement as HTMLElement).click()
              }
            }}
          >
            <UserButton showName={false} />
            <div className="flex flex-col justify-start">
              <p className="text-md font-medium">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-gray-500">
                Last Here:{' '}
                {user?.lastSignInAt
                  ? new Date(user.lastSignInAt).toLocaleDateString()
                  : 'No sign in date available'}
              </p>
            </div>
          </button>
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  )
}
