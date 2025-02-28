import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { LogIn, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

export default async function Home() {
  return (
    <div>
      <div className="flex items-center justify-end gap-4 w-full border-b p-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="rounded-none"
            align="end"
            alignOffset={4}
          >
            <SignedOut>
              <DropdownMenuItem>
                <SignInButton>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <LogIn className="h-6 w-6 mr-2" />
                      <p className="font-light text-lg">Login</p>
                    </div>
                  </button>
                </SignInButton>
              </DropdownMenuItem>
            </SignedOut>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4 py-8 px-6 border w-full max-w-2xl mx-auto justify-center rounded-none">
          <h1 className="text-4xl font-bold text-center">Keepsake</h1>
          <p className="text-lg text-center">
            If you want to store a memory when you're logged out, you're NGMI.
            🫵😂
          </p>
        </div>
      </div>
    </div>
  )
}
