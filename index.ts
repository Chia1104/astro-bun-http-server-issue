import https from "https";
import http from "http";

const createHttp = () => {
  return http.createServer();
}

const createHttps = () => {
  return https.createServer();
}

const server = Bun.serve({
  port: Bun.env.PORT ?? 3000,
  fetch() {
    const httpInstance = createHttp();
    const httpsInstance = createHttps();
    return new Response(JSON.stringify({
      "httpInstance instanceof https.Server": (httpInstance instanceof https.Server).toString(),
      "httpsInstance instanceof http.Server": (httpsInstance instanceof http.Server).toString(),
    }));
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
