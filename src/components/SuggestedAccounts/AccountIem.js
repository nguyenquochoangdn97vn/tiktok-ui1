import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountPreview from './AcountPreview';
import style from './SuggestedAccounts.module.scss';
const cx = classNames.bind(style);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1">
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AcountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[-20, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avata')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/30b21814b145eefae57b6a8a8aeaee37~c5_100x100.jpeg?x-expires=1684245600&x-signature=Z4J6%2F7OkY3CQeQHKR6K1Mkeb%2B5U%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nikname')}>
                            <strong>datvilla94</strong>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('check')}
                            />
                        </p>
                        <p className={cx('name')}>Thanh Thy</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {};
export default AccountItem;
