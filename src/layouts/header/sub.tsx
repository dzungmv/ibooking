import Image from '@/components/ui/image';
import Link from 'next/link';

export default function SubHeader() {
    return (
        <section className='bg-black hidden md:block'>
            <section className='max-w-main mx-auto px-4 py-2 flex items-center gap-1 justify-center'>
                <Image
                    alt='Announcement'
                    className='w-4'
                    src='/icons/announcement.png'
                />

                <div className='text-xs font-medium text-white'>
                    You need a place to promote the sport yard? We&apos;re
                    helping our partners with super deals!{' '}
                    <Link href='' className='text-secondary lg:hover:underline'>
                        Join now
                    </Link>
                </div>
            </section>
        </section>
    );
}
