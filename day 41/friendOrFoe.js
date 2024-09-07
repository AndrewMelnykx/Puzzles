function friend(friends) {
  let friendsArrResult = [];
  friends.map((name) => {
    name.length === 4 ? friendsArrResult.push(name) : {};
  });
  return friendsArrResult;
}

const result = friend(["Ryan", "Kieran", "Jason", "Yous"]);

console.log(result);
