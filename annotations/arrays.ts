const carMaker = ['toyota','vinfast','ford']

const carByMake = [
  ['prius'],
  ['vfe34'],
  ['silverado']
]

//help with inference when extracting value
const carOne = carByMake[0][0]

//prevent adding incompatible type to 
carMaker.push(100)

const importantDate: (string|Date)[] = [new Date()]

importantDate.push('2010-1-1')