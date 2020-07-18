export class DataNotExistsError extends Error {
  constructor (paramName: string) {
    super(`Data not exists: ${paramName}`)
    this.name = `Data not exists: ${paramName}`
  }
}
