// Sends form fields to Web3Forms, which emails them to the address the access
// key was created for. Set VITE_WEB3FORMS_KEY in .env (see .env.example).
export const CONTACT_FALLBACK_EMAIL = 'forolytechnologies@gmail.com'

const endpoint = import.meta.env.VITE_FORM_ENDPOINT || 'https://api.web3forms.com/submit'

export async function sendForm({ _subject, ...fields }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
  if (!accessKey) {
    console.error('VITE_WEB3FORMS_KEY is not set, so the form cannot be sent.')
    throw new Error('not-configured')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: accessKey, subject: _subject, ...fields }),
  })
  const result = await response.json().catch(() => ({}))
  if (!response.ok || !result.success) throw new Error('send-failed')
}
