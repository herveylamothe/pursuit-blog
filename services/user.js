const pgp = require('pg-promise')
const db = pgp('postgres://localhost/blog')

const userService = {};

userService.create = (name, email, password) => {
  return db.none('INSERT INTO users (username, email, password) VALUES (${username}, ${email, ${password})', {username, email, password})
}

userService.read = (id) => {
    return db.one(`SELECT * FROM users WHERE id = ${id}`,{id})
}

userService.update = (id, username, email, password, token = null) =>{
    const arr =[username, email, password, token];
    const arrString = ["username", "email", "password","token"]
    console.log(arr);

    let sqlStr = 'UPDATE user SET'
    let emptyStr = '';
    arr.forEach((element,i) => {
        if(element){
            emptyStr += arrString[i] + '=${' + arrString[i] + '},'
        }
    })

    emptyStr.slice(0, emptyStr.length - 1)

    sqlStr = sqlStr + emptyStr
//UPDATE users SET username = $....

sqlStr + 'WHERE id=${id}'
db.none(sqlStr, {id, username, email, password, token})
//     let sqlStr = 'Update users SET' + arr.reduce((acc, element, i) =>{
//         if (element){
//             acc += arrString[i] + '= ${' + arrString [i] + '},'
//             return acc 
//         }
//         return acc
//     }, '')
// }