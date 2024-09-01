import anim1 from "../../assets/featuresImage/anim1.gif"
import anim2 from "../../assets/featuresImage/anim2.gif"
import anim3 from "../../assets/featuresImage/anim3.gif"

const Features = () => {
    return (
        <div className="my-14 grid grid-cols-2 md:grid-cols-3 gap-5 p-5">
            <div className="border  text-center p-5 space-y-2 bg-slate-100 rounded-lg">
                <img src={anim1} alt="" className="mx-auto w-34"/>
                <h3 className="text-2xl font-bold">Tailored Travel Experiences</h3>
                <p className="text-s">Customized itineraries to suit your preferences.</p>
            </div>
            <div className="border  text-center p-5 space-y-2 bg-slate-100 rounded-lg">
                <img src={anim2} alt="" className="mx-auto w-34"/>
                <h3 className="text-2xl font-bold">Tailored Travel Experiences</h3>
                <p className="text-s">Customized itineraries to suit your preferences.</p>
            </div>
            <div className="border  text-center p-5 space-y-2 bg-slate-100 rounded-lg">
                <img src={anim3} alt="" className="mx-auto w-34"/>
                <h3 className="text-2xl font-bold">Tailored Travel Experiences</h3>
                <p className="text-s">Customized itineraries to suit your preferences.</p>
            </div>
        </div>
    );
};

export default Features;