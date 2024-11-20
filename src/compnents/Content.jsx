// import image from './assets/worktrack image.jpg';
import image from '../assets/worktrack image.jpg';
const Content = () => {
    return(
        <div className="h-screen w-screen bg-white flex">
        <div className="h-full w-6/12 bg-white flex flex-col items-center justify-center ">
          <h1 className="text-5xl font-bold">
            Track your work progress
            <br />
            anywhere anytime!
            <br />
            Track.Analyze.Optimize.
          </h1>
          <p className="text-3xl text-gray-600 mb-6">Elevate Your Workflow, Optimize Your Time.</p>
          <button className="px-6 py-2 bg-pink-500 text-white rounded-full font-semibold text-2xl transition-all hover:bg-pink-600">Start</button>
        </div>
        <div className="h-full w-6/12">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="Work Progress"
          />
        </div>
      </div>
    );
};

export default Content;