import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Points = createParticles();
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  const createParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const count = 500;

    for (let i = 0; i < count; i++) {
      vertices.push((Math.random() - 0.5) * 10);
      vertices.push((Math.random() - 0.5) * 10);
      vertices.push((Math.random() - 0.5) * 10);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0x800080, size: 0.1 });
    return new THREE.Points(geometry, material);
  };

  return <div className="absolute inset-0 overflow-hidden z-0">{/ Particle Background /}</div>;
};

export default ParticleBackground;