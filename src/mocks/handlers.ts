import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/msw/hello', () => {
    return HttpResponse.json({
      message: 'Hello, World!',
    });
  }),
];

export default handlers;
