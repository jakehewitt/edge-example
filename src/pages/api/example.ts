export const runtime = 'edge';

export default {
  async fetch(req: Request) {
    if (req.method == "GET") {
      return new Response(`Hello World`);
    }
  },
};