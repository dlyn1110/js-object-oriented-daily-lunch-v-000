// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0

class Neighborhood() {
  constructor(name) {
    this.name = name
    this.id = ++neighborhoodId
    store.neighborhoods.push(this)
  }
}
 deliveries(){
   return store.deliveries.filter(delivery => {
     return delivery.neighborhoodId === this.id
   })
 }

customers() {
  return store.customers.filter(customer => {
    return customer.neighborhoodId === this.id
  })
}

meals() {
     const allMeals = this.customers().map(customer => customer.meals());
     const merged = [].concat.apply([], allMeals);
     return [...new Set(merged)];
   }
}

let mealID = 0

class Meal() {
  constructor(title, price) {
    this.title = title
    this.price = price
    store.meals.push(this)
    this.id = ++mealID
  }
}

deliveries(){
  return store.deliveries.filter(delivery){
    return delivery mealID === this.id
  }
}
