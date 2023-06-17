import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountPreview from './AcountPreview';
import style from './SuggestedAccounts.module.scss';
const cx = classNames.bind(style);
function AccountItem({ data }) {
    const {
        nickname: userName,
        first_name: firstName,
        last_name: lastName,
        avatar: avatarUrl,
    } = data;
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1">
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AcountPreview data={data} />
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
                    <Image
                        className={cx('avata')}
                        src={avatarUrl}
                        alt={userName}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nikname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && (
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className={cx('check')}
                                />
                            )}
                        </p>
                        <p
                            className={cx('name')}
                        >{`${firstName} ${lastName}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
