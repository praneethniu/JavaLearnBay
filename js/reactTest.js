const descOrder = (input) => {
  const inputs = input.split("")

  const freq = {}

  for (let i = 0; i < inputs.length; i++) {
    if (freq[inputs[i]]) {
      freq[inputs[i]] = freq[inputs[i]] + 1
    } else {
      freq[inputs[i]] = 1
    }
  }
  console.log(freq)
}

const frequencySort = (s) => {
  var map = {}
  var result = ""
  var stringArray = s.split("")
  //put the character count into a map
  for (var i = 0; i < stringArray.length; i++) {
    map[stringArray[i]] = map[stringArray[i]] + 1 || 1
  }
  //sort the map first, then push into the result
  let mapKeys = {}
  Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .forEach(function (v) {
      for (var j = 0; j < map[v]; j++) {
        if (mapKeys[v] === undefined) {
          result += v
          mapKeys = {
            ...mapKeys,
            v: mapKeys[v] ? mapKeys[v] +1: 1,
          }
        }
      }
    })

  return result
}


this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);


console.log(frequencySort("llljkij"))

<textarea value={this.state.value} onChange={this.handleChange} />
