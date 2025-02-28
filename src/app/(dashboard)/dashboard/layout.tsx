export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4 py-8 px-6 border rounded-md w-full max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Keepsake</h1>
        {children}
      </div>
    </div>
  )
}
