import Knex from 'knex';

export async function up(knex: Knex) {
    // create table
    return knex.schema.createTable('itens', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    // rollback
    return knex.schema.dropTable('itens');
}