import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards.forEach((card, i) => {
            if (i === index) {
                card.start({ opacity: 1 });
            } else {
                card.start({ opacity: 0 });
            }
        });
    };

    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
                <h1 className='text-8xl tracking-tight'>Featured</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHover(-1)}
                        className='cardcontainer relative w-1/2 h-[80vh]'>
                        <h1 className='absolute flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                    className='inline-block'
                                    key={index}>
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className='w-full h-full rounded-xl overflow-hidden'>
                            <img
                                className='w-full h-full bg-cover'
                                src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'
                                alt=''
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHover(-1)}
                        className='cardcontainer relative w-1/2 h-[80vh]'>
                        <Link href={'/hotels'}>
                        <div className='card w-full h-full rounded-xl overflow-hidden '>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                                {"VISE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                                        className='inline-block'
                                        key={index}>
                                        {item}
                                    </motion.span>
                                    
                                ))}
                            </h1>
                            <img
                                className='w-full h-full bg-cover'
                                src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg'
                                alt=''
                            />
                        </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
