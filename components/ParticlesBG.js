import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './particles-config';

const ParticlesBG = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles id="particles-here" init={particlesInit} options={particlesConfig} />
  );
};

export default ParticlesBG;