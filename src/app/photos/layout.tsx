export default function DashBoardLayout({
    children,
    feed,
    sidebar,
    modal
  }: {
    children: React.ReactNode,
    feed: React.ReactNode,
    sidebar: React.ReactNode,
    modal: React.ReactNode
  }) {
    return (
         <main className="flex min-h-screen">
          {sidebar}
          {feed}
          {modal}
          {children}
        </main>
    )
  }