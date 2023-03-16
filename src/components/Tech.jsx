import React from 'react';
import { BallCanvas } from './canvas';

import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';

const Tech = () => {
    return (
        <>
            <div>
                <p className={styles.sectionSubText}>What the Technologies I use</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </div>
            <div className="flex mt-20 flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="w-28 h-28 hover:cursor-grab active:cursor-grabbing"
                    >
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, 'technologies');
