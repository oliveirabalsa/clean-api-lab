import connection from '../../../infra/db/connection'

class Controller {
  async all (page: number): Promise<any> {
    return await connection('products')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*')
  }

  async save (payload: any): Promise<any> {
    return await connection('products').insert(payload)
  }

  async one (id: number): Promise<any> {
    return await connection('products').select('*').where('id', id)
  }

  async delete (id: number): Promise<any> {
    return await connection('products').where('id', id).delete()
  }
}

module.exports = new Controller()
