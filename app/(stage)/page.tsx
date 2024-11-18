import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const BallAnimation = dynamic(() => import('@/animations/ball'));

export default function Home() {
    return (
        <section className=''>
            <section className='relative overflow-hidden transform-gpu'>
                <div
                    id='grid'
                    className='flex flex-col pb-20 min-h-[90dvh] w-full'
                />

                <div className='absolute w-full z-[1] inset-0 top-4 flex flex-col items-center px-4'>
                    <h1 className='text-[60px] md:text-[72px] flex text-center flex-col md:flex-row font-bold mx-auto mt-10'>
                        Book.
                        <span className='block bg-apple bg-clip-text text-transparent'>
                            Play
                        </span>
                        .Win.
                    </h1>

                    <p className='mt-10 max-w-[500px] text-lg md:text-xl text-gray-600 md:text-center'>
                        Book your favorite{' '}
                        <span className='relative px-2 pb-[2px] text-black text-lg'>
                            sports courts
                            <span className='bg-[#81ffff] z-[-1] absolute inset-0 rounded px-2 animate-width' />
                        </span>{' '}
                        effortlessly! <br />
                        Reserve badminton, pickleball, and more online.
                    </p>

                    <div className='mt-7 flex items-center'>
                        <BallAnimation />
                        <Link href='/lookup' passHref>
                            <Button hover='shine' className='h-12 text-lg px-7'>
                                Booking
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    );
}
