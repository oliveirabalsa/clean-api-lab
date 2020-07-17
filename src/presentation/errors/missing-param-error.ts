export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = `Missing param: ${paramName}`
  }
}
