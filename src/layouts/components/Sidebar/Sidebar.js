import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { Menuitem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <Menuitem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <Menuitem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive />}
                />
                <Menuitem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                />
            </Menu>
            <SuggestedAccounts label="Recommended account" />
            <SuggestedAccounts label="Following account" />
        </aside>
    );
}

export default Sidebar;
