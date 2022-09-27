
import {z} from 'zod'
import axios from 'axios'
import {productResponse} from './type'
import { createTypeAlias, zodToTs } from 'zod-to-ts'

const API_URL = 'https://dummyjson.com/products'


// schema 推斷 
async function getProduct(){
  const response = await axios.get(API_URL)

  const data = productResponse.parse(response.data)

  return data
} 

getProduct().then(data=>{
  console.log(data)
})