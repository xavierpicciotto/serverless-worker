addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  let x = 'Hello you Worker!'
  return new Response(x, {
    headers: { 'content-type': 'text/plain' },
  })
}
