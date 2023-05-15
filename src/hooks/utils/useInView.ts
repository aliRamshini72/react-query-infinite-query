import {useRef, useState, useEffect} from 'react';

function useInView() {
    const ref: any = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("adsadasd")
                setIsVisible(entry.isIntersecting);
            },
            {rootMargin: "0px"} // Change the threshold as needed
        );
        console.log("ref" , ref)
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };

    }, []);

    return [ref, isVisible];
}

export default useInView