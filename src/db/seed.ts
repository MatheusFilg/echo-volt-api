import { db } from '.'
import { supplierTable } from './schema'

async function seed() {
  const supplier: typeof supplierTable.$inferInsert = {
    name: 'Energisados',
    logo: 'imagem ilustrativa',
    state: 'Pernambuco',
    costOfKwh: '50 R$ por Kw/h',
    kwhMinLimit: 3000,
    totalClients: 127,
    rating: 'Regular',
  }

  await db.insert(supplierTable).values(supplier)
  console.log('New supplier created')

  const suppliers = await db.select().from(supplierTable)
  console.log('Getting all suppliers', suppliers)
}

seed()
