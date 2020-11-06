export class Configuration {
  static getUrl(): string {
    return process.env.DB_URL
  }
}