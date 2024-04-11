"use client"

import * as React from "react"

import { cn } from "../../lib/utils"
import { Icons } from "./icons"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import {useAuth} from "@repo/store/useAuth"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [auth, setAuth] = useAuth();

  function handleChange(e: any) {
    setAuth(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={props.onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            {
              props.page == "signup" ?   (<Input
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e)=>handleChange(e)}
              autoCapitalize="none"
              autoCorrect="email"
              autoComplete="email"
              className="text-white"
              disabled={isLoading}
            />
            ) : ""
            }
              {
              props.page == "signup" ?   (<Input
              id="name"
              placeholder="First Name"
              type="text"
              name="name"
              onChange={(e)=>handleChange(e)}
              autoCapitalize="none"
              autoCorrect="off"
              className="text-white"
              disabled={isLoading}
            />
            ) : ""
            }
            <Input
              id="phone"
              placeholder="Phone No"
              type="text"
              name="phone"
              onChange={(e)=>handleChange(e)}
              autoCapitalize="none"
              autoCorrect="off"
              className="text-white"
              disabled={isLoading}
            />
              <Input
              className="text-white"
              id="password"
              name="password"
              onChange={(e)=>handleChange(e)}
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} variant={"secondary"}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="secondary" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  )
}