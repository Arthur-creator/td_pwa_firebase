import { createRequest } from "./api.js";

const request = createRequest();

export function getProducts() {
  return request.get("/products")
    .then(({ data }) => data)
    .catch(console.error);
}

export function getProduct(productid) {
  return request.get(`/products/${productid}`)
    .then(({ data }) => data)
    .catch(console.error);
}

export function getCart() {
  return request.get("/cart")
      .then(({ data }) => data)
      .catch(console.error);
}

export async function setCart(product) {

  product.quantity = 1

  const carts = {
    items: [],
    total: 0
  }

  const oldData = await getCart()
  console.log(oldData)
  if (oldData.items){
    oldData.items.map(item => {
      if (item.id === product.id){
        oldData.items.quantity += 1
        return ;
      }else {
        carts.items = [...oldData.items,product]
      }
    })
  } else {
    carts.items.push(product)
  }

  carts.items.map( item => {
      carts.total += item.price
      }
  )

  return request.post(`/cart`,carts)
      .then(
          ({ data }) => data
      )
      .catch(console.error);
}

export function deleteCart(product) {

  return request.delete(`/cart`,product)
      .then(
          ({ data }) => [...data, data]
      )
      .catch(console.error);
}
