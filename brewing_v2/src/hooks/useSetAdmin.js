import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux"
import { setAdmin } from "../store/admin/admin.action";

export const useSetAdminTrue = () => {
    const dispatch = useDispatch()

    const updateAdmin = useCallback(() => {
        dispatch(setAdmin(true))
    }, [dispatch])

    useEffect(() => {
        updateAdmin()
    }, [updateAdmin])
}