import * as React from 'react';

/**
 * Class which uses a combination of margins and padding to maintain layout between elements both inside and outside of the grid.
 */

declare class Container extends React.Component<ContainerProps> {}
declare class Row extends React.Component<RowProps> {}
declare class Col extends React.Component<ColProps> {}

interface GridProps<T> extends React.ClassAttributes<T> {
    /**
     * The className property is used to set the value of an element's class attribute
     *
     * @type string
     */
    className?: string;

    hidden?: string,
}

interface ContainerProps extends GridProps<Container> {
    /**
     * Maintains a full width container without a max width but with the same combination of margins and padding.
     *
     * @type boolean
     */
    full?: boolean;
}

interface RowProps extends GridProps<Row> {
    bleed?: boolean;
    align?: Align;
    'direction-row-reverse'?: boolean;
    'direction-column'?: boolean;
    'direction-column-reversed'?: boolean;
    'justify-end'?: boolean;
    'justify-center'?: boolean;
    'justify-space-between'?: boolean;
    'justify-space-around'?: boolean;
}

interface ColProps extends GridProps<Col> {
    /**
     * Removes internal padding from a single column element
     * @type boolean - Removes internal padding if true.
     */
    bleed?: boolean | string,

    /**
     * Set the size of column.
     * @type number - From 1 to 12.
     */
    size: number,

    /**
     * Set the size of column.
     * @type string
     * @deprecated Use size param instead!
     */
    col?: string,

    /**
     * @type boolean
     * @default false
     */
    auto?: boolean,

    order?: number
}

declare enum Align {
    start, center, end
}
