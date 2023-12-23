import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'About Us' }]
}

export default function About() {
  return (
    <div className="w-1/3 max-w-full space-y-4">
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam nulla
        odit laudantium pariatur quod enim sapiente vero natus dolores dolorem
        sunt asperiores totam, dolor amet! Omnis tempora, explicabo quidem
        delectus sequi necessitatibus cupiditate dolorem vel, enim sapiente quam
        ipsam voluptate culpa in, ex esse harum ullam quia sit veniam.
      </p>
      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam nulla
        odit laudantium pariatur quod enim sapiente vero natus dolores dolorem
        sunt asperiores totam, dolor amet! Omnis tempora, explicabo quidem
        delectus sequi necessitatibus cupiditate dolorem vel, enim sapiente quam
        ipsam voluptate culpa in, ex esse harum ullam quia sit veniam.
      </p>
    </div>
  )
}
