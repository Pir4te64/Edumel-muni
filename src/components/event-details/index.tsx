import BreacrumbEventDetails from "../../common/breadcrumb/BreacrumbEventDetails";
import MarqueeOne from "../../common/MarqueeOne";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import EventDetailsArea from "./EventDetailsArea";



const EventDetails = () => {
	return (
		<>
			<HeaderOne />
			<BreacrumbEventDetails />
			<EventDetailsArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
			<ScrollTop />
		</>
	);
};

export default EventDetails;
