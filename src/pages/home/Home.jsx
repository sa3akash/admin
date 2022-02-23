import Chart from '../../components/chart/Chart'
import Feautureinfo from '../../components/feautureinfo/Feautureinfo'
import './home.css'
import {userData} from '../../DummyData'
import WidgeSm from '../../components/widgeSm/WidgeSm'
import WidgeLg from '../../components/widgeLg/WidgeLg'

const Home = () => {
    return (
        <div className='home'>
        <Feautureinfo />
        <Chart data={userData} title={"Users Analytics"} dataKey={'Active User'} grid/>
        <div className='homeWidges'>
            <WidgeSm />
            <WidgeLg />
        </div>

        </div>
    )
}

export default Home
