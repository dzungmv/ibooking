import Photo, { ImageProps } from 'next/image';

type IProps = ImageProps & {
    full?: boolean;
};

export default function Image({ full, ...props }: IProps) {
    return (
        <Photo
            width={0}
            height={0}
            sizes={
                full
                    ? '100vw'
                    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            }
            {...props}
        />
    );
}
