"use client"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { cn } from "@repo/ui/lib/utils"
import { buttonVariants } from "@repo/ui/components/ui/button"
import { UserAuthForm } from "@repo/ui/components/ui/user-auth-form"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useAuth } from "@repo/store/useAuth"

// export const metadata: Metadata = {
//   title: "Authentication",
//   description: "Authentication forms built using the components.",
// }



export default function AuthenticationPage() {
  const Router = useRouter();
  const [data, setData] = useState();
  const [auth, setAuth] = useAuth();
  
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    console.log(auth);
    const res = await axios.post("http://localhost:3001/api/user", auth);
    console.log(res);
    // setIsLoading(true)
    const response = await signIn('credentials', {
      phone: auth.phone,
      password: auth.password,
      redirect: false,
    });
  
    if (!response?.error) {
      Router.push('/dashboard/home');
    }
//   console.log(res);
    // setTimeout(() => {
    //   // setIsLoading(false)
    // }, 3000)
  }
  return (
    <>
      <div className="md:hidden h-[100vh] dark">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container bg-[#020817] relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative  hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Athena
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;The Best payment App I've came across till now, seamless payment, great rewards, Amazing UI, it's just awesome.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 bg-[#020817]">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your phone number below to create your account
              </p>
            </div>
            <UserAuthForm page="signup" onSubmit={onSubmit} className="dark"/>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}