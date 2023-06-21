export default function handler(request, response) {
  console.log('안녕');
  return response.status(200).json();
}
