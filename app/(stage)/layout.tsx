import Header from '@/layouts/header';
import SubHeader from '@/layouts/header/sub';
import { PropsWithChildren } from 'react';

export default function StageLayout({ children }: PropsWithChildren) {
    return (
        <>
            <SubHeader />
            <Header />
            {children}
        </>
    );
}
