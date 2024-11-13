import { Button } from '@/components/ui/button';

export default function HeaderAction() {
    return (
        <section className='flex items-center gap-3'>
            <Button variant='outline'>Join</Button>
            <Button hover='shine'>Booking court</Button>
        </section>
    );
}
