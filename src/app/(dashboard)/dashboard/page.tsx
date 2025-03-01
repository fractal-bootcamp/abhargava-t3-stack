import { api } from '~/trpc/server'

export default async function DashboardPage() {
  const { greeting } = await api.identity.verifyUser({ text: 'Hello' })

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{greeting}</p>
      </div>
    </div>
  )
}
