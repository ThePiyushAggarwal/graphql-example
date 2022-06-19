const users = require('./users.model')

module.exports = {
  Query: {
    users: () => {
      return users
    },
  },
  Mutation: {
    addUser: (_, args) => {
      const newUser = {
        id: args.id,
        fName: args.fName,
        lName: args.lName,
        job: args.job,
      }
      users.push(newUser)
      return newUser
    },
  },
}
