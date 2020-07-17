import knex from 'knex'

const configuration = knex({
  client: 'pg',
  connection: {
    host: 'db',
    user: 'postgres',
    password: 'postgres'
  }
})

export default configuration
