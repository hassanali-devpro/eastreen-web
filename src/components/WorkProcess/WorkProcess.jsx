import WorkProcessVid from "../../assets/videos/video.mp4";
import { ControlBar, Player, PlayToggle } from 'video-react';
import 'video-react/dist/video-react.css';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const WorkProcess = () => {
    const [isEnter, setIsEnter] = useState(false); // State to track if the component is in view

    return (
        <ScrollTrigger onEnter={() => setIsEnter(true)} onExit={() => setIsEnter(false)}>
            <div className={isEnter ? 'animate-slide-up' : ''}>
                <div className="px-[10%] py-[5%]">
                    <h2 className="text-4xl font-semibold">Our Work Process</h2>
                    <p className="py-5 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, autem perferendis? 
                        Tenetur iusto deserunt itaque nisi fugiat id possimus odio.
                    </p>
                    <div className="mt-10">
                        <Player autoPlay loop src={WorkProcessVid}>
                            <ControlBar autoHide={false} disableDefaultControls={true}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    );
};

export default WorkProcess;
