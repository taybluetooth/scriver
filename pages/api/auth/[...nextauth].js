// [...nextauth] is a dynamic route
import NextAuth from 'nextauth'
import Providers from 'next-auth/providers'

const options = {
  providers = [
    Providers.GitHub({
      clientId: "",
      clientSecret: ""
    })
    Providers.Email({
      server: {
        host: "",
        port: "",
        auth: {
          user: "",
          pass: ""
        }
      },
      from: ""
    })
  ]
}
