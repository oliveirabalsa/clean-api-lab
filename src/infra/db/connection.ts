import knex from 'knex'
import * as configuration from '../../../knexfile'

const connection = knex(configuration.connection.development)

export default connection
