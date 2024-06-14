import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('https://example.com/hello', () => {
    return HttpResponse.json({
      message: 'Hello, World!',
    });
  }),
];

export default handlers;
