import { useEffect, useState } from 'react';

/
 * Custom hook to handle animations for CleanSSR.
 * This hook is designed to provide smooth and customizable animations
 * for various components in the CleanSSR technology website.
 *
 * @param {boolean} isVisible - Determines if the component is visible.
 * @param {string} animationType - The type of animation to apply.
 * @returns {string} - The animation class name based on the visibility and type.
 */
export const useAnimation = (isVisible: boolean, animationType: 'fade' | 'slide' | 'zoom'): string => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (isVisible) {
            switch (animationType) {
                case 'fade':
                    setAnimationClass('fade-in');
                    break;
                case 'slide':
                    setAnimationClass('slide-in');
                    break;
                case 'zoom':
                    setAnimationClass('zoom-in');
                    break;
                default:
                    setAnimationClass('');
            }
        } else {
            setAnimationClass('');
        }
    }, [isVisible, animationType]);

    return animationClass;
};

/
 * Types for CleanSSR animations
 */
export interface AnimationProps {
    isVisible: boolean;
    animationType: 'fade' | 'slide' | 'zoom';
}

/
 * Example of how to use the useAnimation hook
 * in a component for CleanSSR.
 */
export const AnimatedComponent: React.FC<AnimationProps> = ({ isVisible, animationType }) => {
    const animationClass = useAnimation(isVisible, animationType);

    return (
        <div className={animated-component ${animationClass}}>
            {/ CleanSSR specific content goes here /}
            <h2>Welcome to CleanSSR</h2>
            <p>Your technology partner in cleaning solutions.</p>
        </div>
    );
};