
import {z} from 'zod'
import fetch from 'node-fetch'
//@ts-ignore
import ZodTypes from './type.ts'
//@ts-ignore
import Service from './fetch.ts'
import { createTypeAlias, zodToTs } from 'zod-to-ts'

const type = new ZodTypes();
const service = new Service();
const API_URL = 'https://dummyjson.com/products'

// schema 推斷 
async function getProduct(){
  const response = await fetch(API_URL).then(response=>response.json())

  const data = type.productResponse.parse(response)

  return data
} 

// case hardcore 

// 這個 zod to ts 我還不知道有沒有洨用 所以大家先用手動自己造 type 出來吧
// const productRespType = zodToTs(type.productResponse, 'productResponse')


// type ProductRespType ={
//   total: number,
//   skip: number,
//   limit: number,
//   products: AnyObject[]
// }

// type AnyObject = {
//   [index:string]:any
// }

// async function getProduct(){
//     const response = service.request<ProductRespType>(API_URL)
//     return response
// }

let data = await getProduct()
console.log(data)