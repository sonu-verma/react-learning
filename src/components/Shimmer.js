import ShimmerCard from "./ShimmerCard";
import ShimmerPage from "./ShimmerPage";

const Shimmer = (props) => {
    return <>
            <div className={props.type == 'list'? "shimmer-container": "shimmer-page-container"} >
                { (props.type == 'list') ? <div>
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                    <ShimmerCard />
                </div> : <ShimmerPage />}
            </div>
    </>;
}


export default Shimmer;