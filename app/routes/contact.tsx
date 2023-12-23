import { MetaFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'Contact' }]
}

export default function Contact() {
  return (
    <Form className="bg-white p-4 rounded w-80 max-w-full shadow">
      <h1 className="text-3xl font-bold mb-10">Contact Us</h1>

      <div className="flex flex-col gap-6">
        <label className="flex flex-col gap-1">
          <span className="font-medium">Nama</span>
          <input
            type="text"
            className="rounded px-3 py-2 border border-sky-800"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Email</span>
          <input
            type="email"
            className="rounded px-3 py-2 border border-sky-800"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="font-medium">Pesan</span>
          <textarea
            className="rounded px-3 py-2 border border-sky-800 resize-none"
            rows={4}
          ></textarea>
        </label>
        <button className="bg-sky-400 text-white font-medium px-3 py-2 rounded hover:bg-sky-500">
          Kirim Pesan
        </button>
      </div>
    </Form>
  )
}
