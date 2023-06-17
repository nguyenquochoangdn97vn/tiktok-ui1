import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';
const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
                { type: 'language', code: 'en', title: 'English' },
                { type: 'tesss', code: 'vi', title: 'Tiếng việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: './fleckback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard Shortcuts',
    },
];
function Header() {
    const currentUser = true;
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: './@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: './cois',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: './settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Logout',
            to: './logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                {/* seaech */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Message"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 50]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEM}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/71d5b04e30966dd227bd63bd63ccd610~c5_100x100.jpeg?x-expires=1685793600&x-signature=gcYoPvPqQXD4yl06Wsf997MOA1M%3D"
                                className={cx('user-avatar')}
                                alt="Nguyễn quốc Hoàng"
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
