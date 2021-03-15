import { Grid } from '@material-ui/core'
import { info } from './info'

const OtherExperience = () => {
    return (
        <div className="padding-rl other-experience">
        <Grid container spacing={10}>
            {info.map((item,index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
            <div className="card">
                <div className="card-image">
                <img src={item.avatar} alt="avatar-img" />
                </div>
                <div className="card-body">
                    <h3>{item.name}</h3>
                    <p className="subtitle">{item.location}
                    <span className={item.role === "Vendor" ? "vendor" : ""}
                    >{item.role}
                    </span></p> 
                    <p>{item.desc}</p>
                </div>
            </div>
            </Grid>
            ))}
        </Grid>
        </div>
    )
}

export default OtherExperience
