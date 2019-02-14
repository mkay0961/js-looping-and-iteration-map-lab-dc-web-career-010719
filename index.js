// Code your solution in this file.
function lowerCaseDrivers(driver) {
  let array = driver.map(function(word) {
    return word.toLowerCase();
  });
  return array

}

function  nameToAttributes(driver) {
  let array = []
  let obj = driver.map(function(word) {
    let hash = {}
    let word1= word.split(" ")
    hash["firstName"] = word1[0]
    hash["lastName"] = word1[1]
    array.push(hash)
  });
   // console.log(array)
   return array
}

function attributesToPhrase(driver) {
  let array = []
  let obj = driver.map(function(word) {
    let str = ""
    str += word["name"]
    str += " is from "
    str += word["hometown"]
    array.push(str)
  });
  return array
}
