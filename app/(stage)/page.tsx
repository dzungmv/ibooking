export default function Home() {
    return (
        <section className='relative overflow-hidden transform-gpu'>
            <div
                id='grid'
                className='flex flex-col pb-20 min-h-[90dvh] w-full'
            />

            <div className='absolute w-full z-[1] inset-0 top-4 flex justify-center'>
                <h1 className='text-[64px] text-center font-bold mx-auto absolute mt-16'>
                    Book. Play. Win.
                </h1>
            </div>
        </section>
    );
}
