import { v4 as uuid } from 'uuid'


const initialPizzas = [];


// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialPizzas })
  },
  post(url, { username, size, instructions }) {
    const newPizza = { id: uuid(), username, size, instructions }
    return Promise.resolve({ status: 200, success: true, data: newPizza })
  }
}
