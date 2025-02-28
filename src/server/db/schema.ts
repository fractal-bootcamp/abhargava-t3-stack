import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'


export const createTable = pgTableCreator((name) => `cpq_${name}`)


