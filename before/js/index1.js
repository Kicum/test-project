let getUserResults = (matchResult, userArray) => {
  const matchScore = getMatchStatus(matchResult)

  return userArray.reduce((acc, current) => {
    let userResult = {
      ...current,
      score: null
    }

    if (current.value === matchResult) {
     userResult.score = 2
    } else if (matchScore === getMatchStatus(current.value)) {
      userResult.score = 1
    } else {
      userResult.score = 0
    }

    acc.push(userResult)
    return acc;
  }, [])

function getMatchStatus(matchResult) {
  let matchArray = matchResult.split(':')
  let matchStatus = null;

  if(matchArray[0] > matchArray[1]) {
    matchStatus = 'first'
  } else if (matchArray[0] < matchArray[1] ) {
    matchStatus = 'second'
  } else if (matchArray[0] === matchArray[1]){
    matchStatus = 'both'
  } else {
    matchStatus = 'none'
  }
  return matchStatus;
}
}

let matchResult = '5:4';
let userArray = [
{name: 'user1', value: '4:5'},
{name: 'user2', value: '1:0'},
{name: 'user3', value: '3:4'},
{name: 'user4', value: '3:2'},
]

console.log(getUserResults(matchResult, userArray))