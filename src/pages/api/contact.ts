import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const body = req.body || {}
  // In a real app you'd validate and send via email provider or store
  console.log('Contact form submission:', body)
  return res.status(200).json({ ok: true })
}
