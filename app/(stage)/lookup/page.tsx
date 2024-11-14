import Image from '@/components/ui/image';

export default function Page() {
    return (
        <section className='max-w-[1100px] mx-auto px-4 mt-4'>
            <div className='flex items-center gap-2'>
                <Image src='/icons/vnb.svg' alt='VNB' className='w-10' />
                <h1 className='text-2xl font-bold'>Ecogreen</h1>
            </div>

            <section></section>
        </section>
    );
}
