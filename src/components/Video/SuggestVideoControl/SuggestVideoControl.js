import { useRef, useState, useEffect, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './SuggestVideoControl.module.scss';
import { Report, Play, Pause, Volume, VolumeMute } from '~/components/Icons';
import { useElementOnScreen } from '~/pages/Home/Home';
const cx = classNames.bind(styles);
const SuggestVideoControl = forwardRef(
    (
        { videoInfo, isInView, videoId, stateMuted, stateVolume, refInview },
        REF,
    ) => {
        const {
            thumb_url: thumbUrl,
            file_url: fileUrl,
            meta: {
                video: { resolution_x: videoWidth, resolution_y: videoHeight },
            },
        } = videoInfo;
        //state
        const [volume, setVolume] = stateVolume;
        const [muted, setMuted] = stateMuted;
        //kích thước video
        const directionVideoClass =
            videoWidth - videoHeight < 0 ? 'vertical' : 'horizontal';
        //state
        const [playing, SetPlaying] = useState(false);
        //ref
        const videoRef = useRef();
        const volumeDotRef = useRef();
        // ref volumedot
        const volumeBarRef = useRef(null);
        //
        const handleTongePlay = () => {
            SetPlaying(!playing);
            !playing ? videoRef.current.play() : videoRef.current.pause();
        };
        const handleVideo = () => {
            if (playing) {
                videoRef.current.pause();
                SetPlaying(false);
            } else {
                videoRef.current.play();
                SetPlaying(true);
            }
        };
        // lướt video tự phát
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };
        const isVisibile = useElementOnScreen(options, videoRef);
        useEffect(() => {
            if (isVisibile) {
                if (!playing) {
                    videoRef.current.play();
                    SetPlaying(true);
                }
            } else {
                if (playing) {
                    videoRef.current.pause();
                    SetPlaying(false);
                }
            }
        }, [isVisibile]);
        //volume
        useEffect(() => {
            videoRef.current.volume = volume;
        }, [volume]);
        useEffect(() => {
            videoRef.current.muted = muted;
        }, [muted]);
        //
        useEffect(() => {
            volumeDotRef.current.style.height = muted
                ? '0%'
                : `${volume * 100}%`;
        }, [volume, muted]);
         //mute
        const handleVolume = () => {
            setMuted(!muted);
        };
        // high volume
        const handleChangeVolume = (e) => {
            const layerOrigin = e.nativeEvent.layerY;
            const fullHeight = volumeBarRef.current.offsetHeight;
            let activeHeight = fullHeight - layerOrigin;
            let percent = (100 / fullHeight) * activeHeight;
    
            // Set height for dot
            volumeDotRef.current.style.height = `${percent}%`;
    
            // Set height when mousemove activate
            volumeBarRef.current.onmousemove = (e) => {
                const layerMove = e.layerY;
                if (layerMove === layerOrigin) return;
                console.log('move');
    
                activeHeight = fullHeight - e.layerY;
    
                if (activeHeight < 0) {
                    setMuted(true);
                    return;
                } else if (activeHeight >= fullHeight) {
                    activeHeight = fullHeight;
                } else {
                    muted && setMuted(false);
                }
    
                percent = (100 / fullHeight) * activeHeight;
    
                volumeDotRef.current.style.height = `${percent}%`;
                videoRef.current.volume = percent / 100;
            };
    
            // Remove mousemove when mouse up or mouse leave outside/nhấc chuột lên, xuống volume
            volumeBarRef.current.onmouseup = volumeBarRef.current.onmouseleave = () => {
                volumeBarRef.current.onmousemove = null;
    
                let volumeRatio = percent / 100;
                let isMute = false;
    
                if (volumeRatio <= 0) {
                    volumeRatio = 0;
                    isMute = true;
                } else if (volumeRatio > 1) {
                    volumeRatio = 1;
                }
    
                setVolume(volumeRatio);
                setMuted(isMute);
            };
        };
        return (
            <div className={cx('video-play', directionVideoClass)}>
                <video
                    ref={videoRef}
                    className={cx('video-playa')}
                    src={fileUrl}
                    onClick={handleVideo}
                ></video>
                <button className={cx('control-report')}>
                    <i className={cx('report-icon')}>{<Report />}</i>
                    <span className={cx('title-report')}>Báo cáo</span>
                </button>
                <button
                    onClick={handleTongePlay}
                    className={cx('control', 'controlPlay')}
                >
                    {playing ? (
                        <i className={cx('report-Play')}>{<Play />}</i>
                    ) : (
                        <i className={cx('report-Pause')}>{<Pause />}</i>
                    )}
                </button>
                    {muted ? (
                        <button
                        className={cx('control', 'volume-btn')}
                        onClick={handleVolume}
                       >
                        <i className={cx('volume')}>{<VolumeMute />}</i>
                        </button>
                    ) : (
                        <button
                        className={cx('control', 'volume-btn')}
                        onClick={handleVolume}
                       >
                        <i className={cx('volume')}>{<Volume />}</i>
                        </button>
                    ) }
        
                <div className={cx('volume-control')}>
                    <div className={cx('volume-bar')} ref={volumeBarRef} onMouseDown={handleChangeVolume}>
                        <div
                            className={cx('volume-dot')}
                            ref={volumeDotRef}
                        ></div>
                    </div>
                </div>
            </div>
        );
    },
);

export default SuggestVideoControl;
