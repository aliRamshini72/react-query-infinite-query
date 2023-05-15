import {useInfiniteQuery} from "@tanstack/react-query";
import queryKeys from "../constants/queryKeys";
import {getAnimations} from "../http/animation/animationHttp";
import queryStaleTimes from "../constants/queryStaleTimes";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

export default function useAnimations() {
    const [sort, setSort] = useState("newest")
    const {
        status,
        error,
        data,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: [queryKeys.animations, sort],
        queryFn: ({pageParam = 1}) => getAnimations(pageParam, sort),
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.paged >= lastPage.max_num_pages) return false
            return lastPage.paged + 1
        },
        staleTime: queryStaleTimes.animations
    })
    const {ref, inView} = useInView();
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage()
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])
    return {
        ref,
        status,
        error,
        data,
        isFetchingNextPage,
        hasNextPage,
        setSort
    }
}