import Image from '@/components/ui/image';
import Link from 'next/link';

export default function HeaderLogo() {
    return (
        <Link href='/' className='flex items-center gap-[6px]' passHref>
            <Image aria-disabled alt='Logo' src='/logo.svg' className='w-7' />
            <p aria-disabled className='text-primary font-semibold text-xl'>
                IBooking
            </p>
        </Link>
    );
}
