import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/
 * Custom hook for creating a 3D scene for CleanSSR's interactive web elements.
 * This hook uses three.js to render a minimal and modern 3D visualization
 * that aligns with CleanSSR's branding and technology focus.
 * 
 * @returns {THREE.Scene} The created 3D scene for CleanSSR.
 */
const use3D = () => {
    useEffect(() => {
        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Set background color
        scene.background = new THREE.Color(0xffffff); // White background

        // Create a simple 3D object (Cube) to represent CleanSSR's services
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x8A2BE2 }); // Purple color
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Position the camera
        camera.position.z = 5;

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resizing
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', () => {});
            renderer.dispose();
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null; // No need to return anything, this hook handles the rendering
};

export default use3D;