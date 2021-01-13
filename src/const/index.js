export const ROUTER = {
  TODOS: '/todos',
  REGISTRATION: '/registration',
  AUTH: '/auth'
}

export const RULES = {
  NAME: {
    counter: 20,
    rules: [
      v => !!v || 'Name is required',
      v => (!!v && v.length <= 20) || 'Name must be less than 20 characters',
    ]
  },
  LOGIN: {
    counter: 10,
    rules: [
      v => !!v || 'Name is required',
      v => (!!v && v.length <= 10) || 'Name must be less than 10 characters',
    ]
  },
  EMAIL: {
    counter: 20,
    rules: [
      v => (!v || v.length <= 20) || 'Password must be less than 20 characters',
      v => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (!v || re.test(String(v).toLowerCase())) || 'Invalid email address';
      }
    ]
  },
  PASSWORD: {
    counter: 20,
    rules: [
      v => !!v || 'Password is required',
      v => (!!v && v.length >= 6) || 'Password must be 6 characters at least',
    ]
  },
  DESCRIPTION: {
    counter: 50,
    rules: [
      v => (!!v && v.length <= 50) || 'Name must be less than 50 characters',
    ]
  }
}