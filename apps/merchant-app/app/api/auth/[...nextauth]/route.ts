import NextAuth from "next-auth"
import { authOptions } from "../../../../lib/auth"
import { NextApiRequest } from "../../../../../../node_modules/next/dist/shared/lib/utils"

//@ts-ignore
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }