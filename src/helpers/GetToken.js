//Soon as you authenticate it grabs headers,status, or any data if needed
// that were sent from get route /dashboard
export default function(callback) {
  fetch('http://localhost:5000/users/remember').then((res) =>
    (res.headers.get('content-type').includes('json') ? res.json() : res.text())
      .then((data) => ({
        headers: [...res.headers].reduce((acc, header) => {
          return { ...acc, [header[0]]: header[1] };
        }, {}),
        status: res.status,
        data: data
      }))
      .then((headers, status, data) => {
        console.log(headers);
        const token = headers.headers.authorization;
        if (!token) return 'Need to authenticate first';
        callback(token);
      })
  );
}
