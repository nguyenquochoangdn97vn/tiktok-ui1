import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    //giá trị đầu nhập
    const [searchValue, setSearchValue] = useState('');
    //giá trị kết quả tìm kiếm
    const [searchResult, setSearchResult] = useState([]);
    // ẩn hiện show và no show kết quả
    const [showwResult, setShowResult] = useState(true);
    //get dom
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1]);
        }, 0);
    }, []);
    const hanldeClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HeaderlessTippy
            interactive
            visible={showwResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Acount</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            //ẩn đi list với tip
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="search acounts videos"
                    spellCheck={false}
                    //e.target.value lấy chính element
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={hanldeClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeaderlessTippy>
    );
}

export default Search;
