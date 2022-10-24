import classnames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/component/Header';
import SideBar from './SideBar';

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
