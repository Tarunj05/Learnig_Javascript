const accountId = 144553
let accountEmail = "tarun@gmail.com"
var accountPassword = "3"
accountCity = "Raipur"     //this is also possible in js but don't use it

let accountState ;  // undefined value, not a garbage value

accountPassword = "1234"
accountEmail = "lund@pussymail.com"
accountCity = "Jaipur" 

console.log(accountEmail)

console.table([accountEmail,accountId,accountPassword,accountCity ,accountState])


// Prefer not to use var  
// because of issue in block and functional scope