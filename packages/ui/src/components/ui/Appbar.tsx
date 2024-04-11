import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex bg-zinc-900 justify-between border-b px-4">
        <div className="text-2xl font-bold text-white flex flex-col justify-center">
            Athena
        </div>
        <div className="flex py-2">
            <Button className="mx-4" onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            <Avatar>
             <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
}