

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <main className='absolute top-[60px] w-full z-[10]'>{children}</main>
  )
}
