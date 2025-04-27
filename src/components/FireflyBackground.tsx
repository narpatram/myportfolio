import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState, useRef } from 'react';

interface Firefly {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Background = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#000',
  zIndex: -1,
  overflow: 'hidden',
});

const Firefly = styled(Box)<{ x: number; y: number; size: number; opacity: number }>(
  ({ x, y, size, opacity }) => ({
    position: 'absolute',
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
    opacity,
    willChange: 'transform, opacity',
  })
);

const FireflyBackground = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const createFirefly = (): Firefly => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5 + 0.5,
    });

    const initialFireflies = Array.from({ length: 30 }, createFirefly);
    setFireflies(initialFireflies);

    const animate = () => {
      setFireflies((prev) =>
        prev.map((firefly) => ({
          ...firefly,
          x: (firefly.x + firefly.speedX + 100) % 100,
          y: (firefly.y + firefly.speedY + 100) % 100,
          opacity: Math.sin(Date.now() * 0.001 + firefly.x) * 0.25 + 0.75,
        }))
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <Background>
      {fireflies.map((firefly, index) => (
        <Firefly
          key={index}
          x={firefly.x}
          y={firefly.y}
          size={firefly.size}
          opacity={firefly.opacity}
        />
      ))}
    </Background>
  );
};

export default FireflyBackground; 