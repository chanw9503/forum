export default function timeHandler(request, response) {
  if (request.method === 'GET') {
    const time = new Date();
    console.log(time);
  }
}
