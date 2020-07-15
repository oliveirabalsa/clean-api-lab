import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable('laboratories', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.boolean('status').notNullable()
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable('laboratories')
}
