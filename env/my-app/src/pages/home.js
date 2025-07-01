import ScheduleTable from "../components/schedule-table";
import Info from "../main-page/info-page";
import Main from "../main-page/main-page";
import Specialists from "../main-page/specialists";


function Home() {
    return (
        <>
            <Main></Main>
            <Info></Info>
            <Specialists></Specialists>
            <ScheduleTable></ScheduleTable>
        </>
    )
}

export default Home;