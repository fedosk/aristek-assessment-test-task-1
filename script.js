function groupBy(arr, key) {
  // Сhecking existence of arguments and the correctness of their types.
  if (arguments.length === 0) {
    throw new Error('Array and key not provided')
  }
  if (!Array.isArray(arguments[0])) {
    throw new Error('Array not provided')
  }
  if (!key) {
    throw new Error('Key not provided')
  }

  let checkKey
  let keyArray = []
  let groupedObj = {}

  // Get array of keys.
  for (let i = 0; i < arr.length; i++) {
    if (key in arr[i]) {
      checkKey = key
      keyArray.push(arr[i][key])
    }
  }

  // Check existence of key in objects.
  if (checkKey === undefined) {
    return {}
  }

  // Remove duplicates.
  keyArray = keyArray.filter((elem, index, arr) => arr.indexOf(elem) === index)

  // Making group object
  for (let i = 0; i < keyArray.length; i++) {

    let objKey = keyArray[i]
    groupedObj[objKey] = []

    for (let j = 0; j < arr.length; j++) {
      if (objKey === arr[j][key]) {
        groupedObj[objKey].push(arr[j])
      }
    }

  }
  return groupedObj
}

// Data For check the answer

/* const array = [{
    id: 1,
    universe: "marvel",
    name: "Spider Man"
  },
  {
    id: 2,
    universe: "marvel",
    name: "Iron Man"
  },
  {
    id: 3,
    universe: "dc",
    name: "Aqua Man"
  },
  {
    id: 4,
    universe: "dc",
    name: "Bat Man"
  },
  {
    id: 5,
    universe: "marvel",
    name: "Hulk",
  }
]

const key = 'universe'
console.log(groupBy(array, key));
*/