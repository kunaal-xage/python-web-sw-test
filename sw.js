self.addEventListener("fetch", (event) => {
  console.log(event.request);
  console.log("caught event");
  console.log("clientId: " + event.clientId);
  console.log("resultingClientId: " + event.resultingClientId);
  event.respondWith(customHeaderRequestFetch(event));
});

function customHeaderRequestFetch(event) {
  console.log("headers before: " + event.request.headers);
  const headers = new Headers(event.request.headers);

  headers.set('x-custom-header', 'test-header');

  console.log("headers: " + headers);

  const newRequest = new Request(event.request, {
    mode: 'cors',
    credentials: 'omit',
    headers: headers
  });
  return fetch(newRequest)
}
