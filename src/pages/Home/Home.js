import { useEffect, useState, useMemo, useRef } from 'react';
import * as videoService from '~/services/videoService';
import SuggestVideo from '~/components/Video/SuggestVideo';
import { InView } from 'react-intersection-observer';
import TiktokLoading from '~/components/TiktokLoading';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);
function Home() {
    const [videoList, SetVideoList] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        if (page < 1) return;
        const fetchProducts = async () => {
            const result = await videoService.getSuggestVideo(page);
            SetVideoList([...videoList, ...result]);
        };
        fetchProducts();
    }, [page]);
    //state
    const [mute, setMute] = useState(true);
    const [volume, setVolume] = useState(0.5);
    //ref
    const inViewArr = useRef([]);
    const pageRandom = useRef([]);
    //page
    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = pageRandom.current;
        let page;

        if (randomList.length >= countPage) {
            randomList.length === countPage && randomList.push(max);
            page = ++randomList[randomList.length - 1];

            return page;
        }

        do {
            page = Math.floor(Math.random() * countPage + min);
        } while (randomList.includes(page));

        randomList.push(page);

        return page;
    };
    //
    return (
        <div>
            {videoList.map((video, index) => {
                return (
                    <InView key={index}>
                        {({ inView, ref: observeRef }) => (
                            <SuggestVideo
                                ref={observeRef}
                                isInView={inView}
                                videoInfo={video}
                                videoId={index}
                                stateMuted={[mute, setMute]}
                                stateVolume={[volume, setVolume]}
                                refInview={inViewArr}
                            />
                        )}
                    </InView>
                );
            })}
            <InView
                onChange={(inView) =>
                    inView && setPage(handleRandomPage(1, 10))
                }
            >
                <i className={cx('auto-load-more')} icon={<TiktokLoading />} />
            </InView>
        </div>
    );
}
// lướt video tự phát
export const useElementOnScreen = (options, targetRef) => {
    const [isVisibile, setIsVisible] = useState();
    const callbackFunction = (entries) => {
        const [entry] = entries; //const entry = entries[0]
        setIsVisible(entry.isIntersecting);
    };
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            callbackFunction,
            optionsMemo,
        );
        const currentTarget = targetRef.current;
        if (currentTarget) observer.observe(currentTarget);

        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [targetRef, optionsMemo]);
    return isVisibile;
};
export default Home;
