import * as React from 'react';

/**
 * Class which uses a combination of margins and padding to maintain layout between elements both inside and outside of the grid.
 */
declare class Container extends React.Component<ContainerProps> {}

declare interface ContainerProps {
    /**
     * Maintains a full width container without a max width but with the same combination of margins and padding.
     * @type boolean
     */
    full?: boolean;
    hidden?: string;
}

declare class Row extends React.Component<RowProps> {}

declare interface RowProps extends React.ClassAttributes<Row> {
    bleed?: boolean;
    hidden?: string;
    align?: Align;
    'direction-row-reverse'?: boolean;
    'direction-column'?: boolean;
    'direction-column-reversed'?: boolean;
    'justify-end'?: boolean;
    'justify-center'?: boolean;
    'justify-space-between'?: boolean;
    'justify-space-around'?: boolean;
}

declare class Col extends React.Component<ColProps> {}


declare interface ColProps extends React.ClassAttributes<Col> {
    /**
     * Set the size of column.
     * @type number - From 1 to 12.
     */
    size: number,
    col?: string,
    auto?: boolean,
    hidden?: string,
    /**
     * Removes internal padding from a single column element
     * @type boolean - Removes internal padding if true.
     */
    bleed?: boolean | string,
    order?: number
}

declare enum Align {
    start, center, end
}
