const phones = [
  {
    name: 'samsung s5',
    price: 45000,
    camera: 10,
    storage: 32
  },
  {
    name: 'walton h6',
    price: 16000,
    camera: 8,
    storage: 12
  },
  {
    name: 'xiaomi h6',
    price: 22000,
    camera: 12,
    storage: 16
  },
  {
    name: 'One Plus h6',
    price: 40000,
    camera: 48,
    storage: 64
  },
  {
    name: 'symphony h6',
    price: 12000,
    camera: 5,
    storage: 8
  }
]

let cheapest = phones[0];
for(const phone of phones){
  if(phone.price < cheapest.price){
    cheapest = phone;
  }
}
console.log(cheapest);