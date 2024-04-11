import { useRecoilState, useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance"

export const useBalance = () => {
    const value = useRecoilState(balanceAtom);
    return value;
}   