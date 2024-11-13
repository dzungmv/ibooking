import HeaderAction from './action';
import HeaderLogo from './logo';

export default function Header() {
    return (
        <header className='max-w-main mx-auto px-4 py-2 flex items-center justify-between'>
            <HeaderLogo />
            <HeaderAction />
        </header>
    );
}
