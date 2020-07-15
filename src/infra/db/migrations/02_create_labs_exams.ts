import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable('labs_exams', table => {
    table.increments('id').primary()
    table.integer('point_id')
      .notNullable()
      .references('id')
      .inTable('labs')

    table.integer('item_id')
      .notNullable()
      .references('id')
      .inTable('exams')
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable('labs_exams')
}
