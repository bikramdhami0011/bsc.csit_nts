import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
const handler = NextAuth({
  providers:[
    GoogleProvider({
         clientId:"534061872724-rs8cr8l0evakhdh7c6op1aal4u1sva5k.apps.googleusercontent.com",
        clientSecret:"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"
    })
  ]
   
  
})

export { handler as GET, handler as POST }