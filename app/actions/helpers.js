import 'whatwg-fetch'

export const fetchGet = url => (
  fetch(`/api${url}`, {
    credentials: 'same-origin',
  })
)

export const fetchPost = (url, payload) => (
  fetch(`/api${url}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  })
)
