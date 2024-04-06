"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

import { Loader } from "lucide-react";

import { signInAction } from "@/lib/actions/users";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthFormError from "@/components/auth/AuthFormError";


export default function SignInPage() {
  const [state, formAction] = useFormState(signInAction, {
    error: "",
  });

  return (
      <Card className="mx-auto max-w-sm">
          <CardHeader>
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                  Sign in to your account
              </CardDescription>
          </CardHeader>
          <CardContent>
              <AuthFormError state={state}/>
              <form action={formAction}>
                  <div className="grid gap-4">

                      <div className="grid gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input name="email" id="email" type="email" placeholder="john.doe@domain.com" required/>
                      </div>
                      <div className="grid gap-2">
                          <div className="flex items-center">
                              <Label htmlFor="password">Password</Label>
                              <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                                  Forgot your password?
                              </Link>
                          </div>
                          <Input type="password" name="password" id="password" placeholder="******" required/>
                      </div>
                      <SubmitButton/>
                    </div>
              </form>

              <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="underline">
                      Sign up
                  </Link>
              </div>
          </CardContent>
      </Card>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      Sign{pending ? "ing" : ""} in <Loader className={cn("animate-spin", { hidden: !pending })} />
    </Button>
  );
};