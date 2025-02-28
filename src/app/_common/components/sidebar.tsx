'use client'

import { SignedIn, UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { userInformation } from '~/app/_common/hooks/userInfo'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
} from '~/components/ui/sidebar'

export function AppSidebar() {
  const { user } = userInformation()
  const [isCollapsed, setIsCollapsed] = useState(false)

  // Keyboard binding that sets tailwind-classes.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 'b') {
        setIsCollapsed((prev) => !prev)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <Sidebar
      variant="floating"
      side="left"
      collapsible="icon"
      data-collapsed={isCollapsed}
      className="group"
    >
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SignedIn>
          <button
            className="flex items-center place-content-center gap-3 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => {
              const userButtonElement = document.querySelector(
                '.cl-userButtonTrigger',
              )
              if (userButtonElement) {
                ;(userButtonElement as HTMLElement).click()
              }
            }}
          >
            <UserButton />
            <div className="flex flex-col justify-start group-data-[collapsed=true]:hidden">
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
