import { Composition } from 'remotion';
import { TestingAnimation } from './TestingAnimation';

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="TestingAnimation"
        component={TestingAnimation}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
