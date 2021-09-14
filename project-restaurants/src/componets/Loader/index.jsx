import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
    const defaultOption = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      },
    };
    return <Lottie options={defaultOption}/>
};