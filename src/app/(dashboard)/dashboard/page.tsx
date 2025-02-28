import { SignedIn, UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 py-8 px-6 border w-full max-w-2xl mx-auto justify-center rounded-none">
        <h1 className="text-4xl font-bold text-center">Keepsake</h1>
        <p className="text-lg text-center">
          You're logged in so you're going to make it. 👍
        </p>
      </div>
    </div>
  )
}
