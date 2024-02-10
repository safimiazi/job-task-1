import CredentialsProvider from "next-auth/providers/credentials";
import User from "../models/user";
import bcrypt from "bcrypt";
import dbConnect from "./dbConnect";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                try {
                    await dbConnect(); // Ensure the database connection is established

                    const { email, password } = credentials;

                    const user = await User.findOne({ email });
                
                    if (!user || !user.password) {
                        return null; // No user found or password not set
                    }

                    const isPasswordMatched = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!isPasswordMatched) {
                        return null; // Passwords do not match
                    }

                    return user; // Return the user object if everything is fine
                } catch (error) {
                    console.error("Error in authentication:", error);
                    return null; // Return null in case of any error
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};
