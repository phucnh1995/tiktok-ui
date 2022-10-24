import styles from './SideBar.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <h1>SideBar</h1>
        </aside>
    );
}

export default SideBar;
