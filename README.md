# Demo: Server-specific interceptors in Angular

By extending the `HttpClient`, you can add a simple `HttpContextToken` to every request and have server-specific interceptors.

This repo has an example interceptor that prepends the request path with the server URL. It may not be the best use case, but explains the idea.

- Install the dependencies: `npm ci`
- Start the development server: `npm start`
- Visit [localhost:4200](http://localhost:4200)
