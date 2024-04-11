import { useRecoilState, useRecoilValue } from "recoil"
import { authAtom } from "../atoms/auth"

export const useAuth = () => {
    const value = useRecoilState(authAtom);
    return value;
}   