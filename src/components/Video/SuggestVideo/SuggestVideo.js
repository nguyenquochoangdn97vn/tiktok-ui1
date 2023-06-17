import classNames from 'classnames/bind';
import { forwardRef, memo } from 'react';
import styles from './SuggestVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { HeartIcon, Comment, Share } from '~/components/Icons';
import SuggestVideoControl from '../SuggestVideoControl';
import { Link } from 'react-router-dom';
import config from '~/config';
import Image from '~/components/Image';

// import AcountPreview from '~/components/SuggestedAccounts/AcountPreview';

const cx = classNames.bind(styles);
const SuggestVideo = forwardRef(({ videoInfo, isInView, videoId,stateMuted,stateVolume,refInview }, REF) => {
    const {
        user: {
            nickname: userName,
            first_name: firstName,
            last_name: lastName,
            avatar: avatarUrl,
            // tick,
            // bio,
        },
        description,
        music: musicInfo,
        likes_count: likeCount,
        comments_count: commentsCcount,
    } = videoInfo;
    return (
        <div className={cx('videoitem-wrapper')}>
            <Link to={config.routes.profile}>
                <Image
                    className={cx('image-info')}
                    src={avatarUrl}
                    alt="xinchao"
                />
            </Link>
            <div className={cx('videoitem-body')}>
                <Link to={config.routes.profile}></Link>
                <div className={cx('video-info')}>
                    <Link to={config.routes.profile}>
                        <p className={cx('VideoItem-name')}>
                            <span className={cx('nick-name')}>{userName}</span>
                            <span
                                className={cx('full-name')}
                            >{`${firstName} ${lastName}`}</span>
                        </p>
                    </Link>
                    <button className={cx('btn-item')}>
                        <span className={cx('following-item')}>Follow</span>
                    </button>
                    <p className={cx('description')}>{description}</p>
                    <div>
                        <p href="#" className={cx('name-music')}>
                            <FontAwesomeIcon
                                className={cx('music-icon')}
                                icon={faMusic}
                            />
                            {musicInfo}
                        </p>
                    </div>
                </div>
                <div className={cx('video-play-wrapper')}>
                    <SuggestVideoControl
                        videoInfo={videoInfo}
                        isInView={isInView}
                        videoId={videoId}
                        ref={REF}
                        stateMuted ={stateMuted }
                        stateVolume={stateVolume}
                        refInview={refInview}
                    />

                    <div className={cx('interactiveVideo')}>
                        <label className={cx('interactiveVideo-iem-icon')}>
                            <div className={cx('interactiveVideo-heart')}>
                                <i className={cx('heart-item')}>
                                    {<HeartIcon />}
                                </i>
                            </div>
                            <div>
                                <strong
                                    className={cx('interactiveVideo-acount')}
                                >
                                    {likeCount}
                                </strong>
                            </div>
                        </label>
                        <label className={cx('interactiveVideo-iem-icon')}>
                            <div className={cx('interactiveVideo-heart')}>
                                <i className={cx('heart-item')}>
                                    {<Comment />}
                                </i>
                            </div>
                            <div>
                                <strong
                                    className={cx('interactiveVideo-acount')}
                                >
                                    {commentsCcount}
                                </strong>
                            </div>
                        </label>
                        <label className={cx('interactiveVideo-iem-icon')}>
                            <div className={cx('interactiveVideo-heart')}>
                                <i className={cx('heart-item')}>{<Share />}</i>
                            </div>
                            <div>
                                <strong
                                    className={cx('interactiveVideo-acount')}
                                >
                                    chia sẻ
                                </strong>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default memo(SuggestVideo);
