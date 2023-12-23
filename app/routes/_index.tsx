import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Homepage' }]
}

export default function Index() {
  return (
    <div className="grid items-center md:grid-cols-2 gap-6">
      <h1 className="text-5xl text-center md:text-left md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
        This is your
        <br />
        Simple Homepage
      </h1>
      <img
        alt="hero-banner"
        src="https://images.unsplash.com/photo-1682686581663-179efad3cd2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  )
}
