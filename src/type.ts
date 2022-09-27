

import {TypeOf, z} from 'zod'

const category =z.enum(['smartphones',
'laptops',
'fragrances',
'skincare',
'groceries',
'home-decoration'])

const brand = z.enum([  'Apple',
'Samsung',
'OPPO',
'Huawei',
'APPle',
'Microsoft Surface',
'Infinix',
'HP Pavilion',
'Impression of Acqua Di Gio',
'Royal_Mirage',
'Fog Scent Xpressio',
'Al Munakh',
'Lord - Al-Rehab',
"L'Oreal Paris",
'Hemani Tea',
'Dermive',
'ROREC White Rice',
'Fair & Clear',
'Saaf & Khaas',
'Bake Parlor Big',
'Baking Food Items',
'fauji',
'Dry Rose',
'Boho Decor',
'Flying Wooden',
'LED Lights',
'luxury palace',
'Golden'])

const productSchema = z.object({
    id: z.number().describe('產品 uuid'),
    title: z.string().describe('產品名稱'),
    description: z.string().optional().describe('產品介紹'),
    price: z.number(),
    discountPercentage: z.number(),
    rating: z.number(),
    stock: z.number(),
    brand: brand,
    category: category,
    thumbnail: z.string(),
    images: z.array(z.string())
  })

export const productResponse = z.object({
    total: z.number(),
    skip: z.number(),
    limit: z.number(),
    products: z.array(productSchema)
})

type test = z.infer< typeof productResponse>