import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Lookup',
};

export default function LookupLayout({ children }: PropsWithChildren) {
    return children;
}
