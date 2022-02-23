import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './feautureinfo.css'

const Feautureinfo = () => {
    return (
        <div className='feauture'>
            <div className="feauturedItem">
                <span className="feautureTitle"> Revanue</span>
                <div className="feauturedMonyContainer">
                    <span className="feautureMony">$2,415</span>
                    <span className="feautureMonyRate">-$12,4 <ArrowDownward className='monyRateIcon negative' /></span>
                </div>
                <span className="feautureSubTitle"> Compared to last month</span>
            </div>
            <div className="feauturedItem">
                <span className="feautureTitle"> Sales</span>
                <div className="feauturedMonyContainer">
                    <span className="feautureMony">$4,125</span>
                    <span className="feautureMonyRate">-$1,4 <ArrowDownward className='monyRateIcon negative' /></span>
                </div>
                <span className="feautureSubTitle"> Compared to last month</span>
            </div>
            <div className="feauturedItem">
                <span className="feautureTitle"> Cost</span>
                <div className="feauturedMonyContainer">
                    <span className="feautureMony">$2,225</span>
                    <span className="feautureMonyRate">+$2,4 <ArrowUpward className='monyRateIcon' /></span>
                </div>
                <span className="feautureSubTitle"> Compared to last month</span>
            </div>
        </div>
    )
}

export default Feautureinfo;
