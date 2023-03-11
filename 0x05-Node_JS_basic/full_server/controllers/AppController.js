export class AppController {
  static getHomepage(req, resp, next) {
    resp.greeting = 'Hello Holberton School!';
    next();
  }
}
