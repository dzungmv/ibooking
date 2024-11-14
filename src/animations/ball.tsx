'use client';

import ball from './ball.json';

import Lottie from 'react-lottie-player/dist/LottiePlayerLight';

export default function BallAnimation() {
    return <Lottie animationData={ball} play loop style={{ width: 150 }} />;
}
