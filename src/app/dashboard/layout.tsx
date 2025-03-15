export default function DashBoardLayout({
    children,
    user,
    notification,
    team
  }: {
    children: React.ReactNode,
    user: React.ReactNode,
    notification: React.ReactNode,
    team: React.ReactNode
  }) {
    return (
        <main className="container">
        <section className="py-6">{children}</section>
        <section className="flex flex-col h-full gap-6 ms-12">
          {/* User component occupies the full width */}
          <div className="flex gap-6">
              <div className="w-full">{user}</div>
          </div>

          {/* Team and Notification components are stacked below */}
          <div className="flex gap-6">
              <div className="w-full">{team}</div>

              <div className="w-full">{notification}</div>
          </div>
        </section>
      </main>
    )
  }