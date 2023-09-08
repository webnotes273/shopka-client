import {useCallback, useMemo} from "react";
import {
    useAddToWatchListMutation,
    useGetWatchListOfUserQuery,
    useRemoveFromWatchListMutation
} from "../store/services/UserService";


const useWatch = ({ productId, currentUser }) => {

    const { data: watchList } = useGetWatchListOfUserQuery(currentUser.email);
    const [addToWatchList, {error: addToWatchListError, isLoading: addToWatchListLoading}] = useAddToWatchListMutation()
    const [removeFromWatchList, {error: removeFromWatchListError, isLoading: removeFromListLoading}] = useRemoveFromWatchListMutation()

    const hasFavorited = useMemo(() => {
        const list = watchList || [];

        const isInclude = list.includes(String(productId));
        return isInclude;
    }, [productId, watchList]);

    const toggleFavorite = useCallback( (e) => {
            e.stopPropagation();

            try {
                let result;

                if (hasFavorited) {
                    result = removeFromWatchList(productId);
                } else {
                    result = addToWatchList(productId);
                }

                return result
            } catch (error) {
                console.log('Something went wrong.')
            }
        },
        [
            addToWatchList,
            hasFavorited,
            removeFromWatchList,
            productId
        ]);

    return {
        hasFavorited,
        toggleFavorite,
    }
}

export default useWatch;