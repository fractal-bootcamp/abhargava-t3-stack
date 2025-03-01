'use client'

import { OrganizationSwitcher, SignedIn, UserButton } from '@clerk/nextjs'
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
      <SidebarHeader>
        <OrganizationSwitcher
          hidePersonal={true}
          appearance={{
            elements: {
              rootBox: isCollapsed ? 'hidden' : 'w-full',
              organizationSwitcherTrigger:
                'w-full flex items-center justify-center gap-2 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200',
              organizationPreview: 'font-medium text-sm',
              organizationSwitcherPopoverCard:
                'shadow-md rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950',
              organizationSwitcherPopoverActions: 'p-2',
              organizationList: 'p-2',
              organizationSwitcherPopoverActionButton:
                'w-full flex items-center gap-2 rounded-md p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200',
              '.__clerk_internal_div': 'hidden',
              internal: 'hidden',
              organizationPreviewTextContainer: isCollapsed ? 'hidden' : '',
              organizationSwitcherTriggerIcon: isCollapsed ? 'hidden' : '',
              organizationPreviewAvatarBox: isCollapsed ? 'hidden' : 'hidden',
            },
          }}
        />
      </SidebarHeader>

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
            <div className="flex items-center gap-3">
              <UserButton />
              <div className="flex flex-col items-start group-data-[collapsed=true]:hidden">
                <p className="text-md font-medium dark:text-white">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Last Sign In:{' '}
                  {user?.lastSignInAt
                    ? new Date(user.lastSignInAt).toLocaleDateString()
                    : 'No sign in date available'}
                </p>
              </div>
            </div>
          </button>
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  )
}
