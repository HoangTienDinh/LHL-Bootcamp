const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower =  function(follower) {
  let followCount = 0;
  let bigFollow = "";
  for (let profile in follower) {
    let following = follower[profile].follows.length;
    if (following > followCount) {
      followCount += following;
      bigFollow = profile;
    }
  }
  return bigFollow;
};
// console.log(biggestFollower(data));

const mostPopular = function(follows) {
  let friendCount = {};
  let results = 0;
  let popularPerson = "";
  for (let profile in follows) {
    let profileCounting = follows[profile].follows;
    for (let profileId of profileCounting) {
      friendCount[profileId] = (friendCount[profileId] || 0) + 1;
      if (friendCount[profileId] > 0) {
        results += 1;
        popularPerson = profileId;
      }
    }
  }
  return popularPerson;
};
// console.log(mostPopular(data));

const printAll = function(data) {
  let displayAll = {};
  for (let id in data) {
    const profileInfo = data[id].follows
    displayAll[id] = { 
      "following": profileInfo,
      "followers": []
    }
  }

  for (const x of displayAll.)
  console.log(displayAll)

};

printAll(data);

// unrequitedFollowers()