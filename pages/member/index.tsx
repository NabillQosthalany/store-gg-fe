import Sidebar from "../../components/organisms/Sidebar";
import OverviewContent from "../../components/organisms/OverviewContent";

export default function Overview() {
    return (
        <section className="overview overflow-auto">
            <Sidebar activeMenu="overview" />
            <OverviewContent />
        </section>
    )
}
