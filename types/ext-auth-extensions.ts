import 'next-auth'

export declare type ISODateString = string
declare module 'next-auth' {
  interface User {
    id: string
    email: string
    name: string
  }

  interface Session {
    user: User
    expires?: ISODateString
  }
}
