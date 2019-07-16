import * as React from 'react';

declare class Row extends React.Component<RowProps, any> {}

export interface RowProps {
    bleed?: boolean;
    hidden?: string;
    align?: Align;
    'direction-row-reverse': boolean;
    'direction-column': boolean;
    'direction-column-reversed': boolean;
    'justify-end': boolean;
    'justify-center': boolean;
    'justify-space-between': boolean;
    'justify-space-around': boolean;
}

export enum Align {
    start, center, end
}
