import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import style from './AcountPreview.module.scss';

const cx = classNames.bind(style);
function AcountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/30b21814b145eefae57b6a8a8aeaee37~c5_100x100.jpeg?x-expires=1684245600&x-signature=Z4J6%2F7OkY3CQeQHKR6K1Mkeb%2B5U%3D"
                    alt="null"
                />
                <div>
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nikname')}>
                    <strong>datvilla94</strong>
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        className={cx('check')}
                    />
                </p>
                <p className={cx('name')}>Đạt viila</p>
                <p className={cx('anlytick')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AcountPreview;
