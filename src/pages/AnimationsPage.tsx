import useAnimations from "../hooks/useAnimations";

export default function AnimationsPage() {
    const {
        ref,
        status,
        error,
        data,
        isFetchingNextPage,
        hasNextPage,
        setSort
    } = useAnimations()
    if (status === "loading") return <h1>Loading...</h1>
    if (status === "error") return <h1>{JSON.stringify(error)}</h1>
    return (
        <div>
            <button onClick={()=> setSort("view")}>
                sort
            </button>
            <>
                <h1>Post List Infinite</h1>
                {data?.pages
                    .flatMap(data => data.data)
                    .map((post) => (
                        <div key={post.id}>
                            <img src={post.reviewsThumbnailUrl}/>
                            <h5>
                                {post.reviewsTitle}
                            </h5>
                        </div>
                    ))}
            </>
            <div ref={ref} style={{height : '50px'}}>
                <p>{hasNextPage ? "" : 'end'}</p>
                <p>{isFetchingNextPage ? "looding ... " : ""}</p>
            </div>
        </div>
    )
}