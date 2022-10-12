import Header from '~/component/Layout/component/Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <SideBar />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
