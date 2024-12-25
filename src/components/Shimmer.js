import ShimmerCard from "./ShimmerCard";
import ShimmerPage from "./ShimmerPage";

const Shimmer = (props) => {
    return <>
            <div className={props.type == 'list'? "shimmer-container": "shimmer-page-container"} >
                { (props.type == 'list') ? <div className={props.type == 'list'? "flex flex-wrap": "shimmer-page-container"}>
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