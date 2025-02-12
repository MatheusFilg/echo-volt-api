import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, integer } from 'drizzle-orm/pg-core'

export const supplierTable = pgTable('supplier', {
  id: text('id')
    .primaryKey()
    .$default(() => createId()),
  name: text('name').notNull(),
  logo: text('logo').notNull(),
  state: text('state').notNull(),
  costOfKwh: text('cost_of_kwh').notNull(),
  kwhMinLimit: integer('kwh_min_limit').notNull(),
  totalClients: integer('total_clients').notNull(),
  rating: text('rating').notNull(),
})
