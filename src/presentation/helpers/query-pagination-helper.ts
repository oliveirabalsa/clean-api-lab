export default (query: any): any => {
  return {
    skip: Number(query.skip) || 0,
    limit: Number(query.limit) || 20
  }
}
