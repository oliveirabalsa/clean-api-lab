import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable('labs_exams', table => {
    table.increments('id').primary()
    table.integer('lab_id')
      .notNullable()
      .references('id')
      .inTable('laboratory')

    table.integer('exam_id')
      .notNullable()
      .references('id')
      .inTable('exam')
  })
}

export async function down (knex: Knex): Promise<any> {
  return await knex.schema.dropTable('labs_exams')
}
