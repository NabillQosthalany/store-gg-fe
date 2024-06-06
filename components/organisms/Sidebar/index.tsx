import MenuItem from "./MenuItem"
import Profile from "./Profile"
import Footer from './Footer'

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function Sidebar(props: SideBarProps) {
    const { activeMenu } = props
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/" />
                    <MenuItem title="Transactions" icon="icon-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
                    <MenuItem title="Messages" icon="icon-menu-message" href="/member/message" />
                    <MenuItem title="Card" icon="icon-menu-card" />
                    <MenuItem title="Rewards" icon="icon-menu-reward" />
                    <MenuItem title="Settings" icon="icon-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile" />
                    <MenuItem title="Logout" icon="icon-menu-logout" href="/sign-in" />
                </div>
                <Footer />
            </div>
        </section>
    )
}
