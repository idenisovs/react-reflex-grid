import * as React from 'react';

/**
 * Class which uses a combination of margins and padding to maintain layout between elements both inside and outside of the grid.
 */
declare class Container extends React.Component<ContainerProps> {
    static propTypes: ContainerProps;
}

/**
 * A container for Col components.
 */
declare class Row extends React.Component<RowProps> {
    static propTypes: RowProps;
}

/**
 * A child of Row component, the single Flex item.
 */
declare class Col extends React.Component<ColProps> {
    static propTypes: ColProps;
}

interface ContainerProps extends GridProps<Container> {
    /**
     * Maintains a full width container without a max width but with the same combination of margins and padding.
     *
     * @type boolean
     * @default false
     */
    full?: boolean;
}

interface ColProps extends GridProps<Col> {
    /**
     * Removes internal padding from a single column element
     * @type boolean - Removes internal padding if true.
     */
    bleed?: boolean | string;

    /**
     * The size of column (from 1 to 12).
     * @type number
     */
    size: number;

    /**
     * Set the size of column.
     * @type string
     * @deprecated Use size param instead!
     */
    col?: string;

    /**
     * @type boolean
     * @default false
     */
    auto?: boolean;

    order?: number;

    /**
     * Set the Order in responsive mode.
     * @example xs-1,sm-2,md-3,lg-4,xlg-5
     * @type string
     */
    'responsive-order'?: string;
}

interface RowProps extends GridProps<Row> {
    bleed?: boolean;
    /**
     * Set the horizontal position of Row content.
     * @type Align
     */
    align?: Align;
    'direction-row-reverse'?: boolean;
    'direction-column'?: boolean;
    'direction-column-reversed'?: boolean;
    'justify-end'?: boolean;
    'justify-center'?: boolean;
    'justify-space-between'?: boolean;
    'justify-space-around'?: boolean;

    /**
     * Sets `align-content: flex-start`
     * @type boolean
     * @default false
     *
     */
    'align-content-start'?: boolean;

    /**
     * Sets `align-content: flex-end`
     * @type boolean
     * @default false
     *
     */
    'align-content-end'?: boolean;

    /**
     * Sets `align-content: center`
     * @type boolean
     * @default false
     *
     */
    'align-content-center'?: boolean;

    /**
     * Sets `align-content: space-between`
     * @type boolean
     * @default false
     *
     */
    'align-content-space-between'?: boolean;

    /**
     * Sets `align-content: space-around`
     * @type boolean
     * @default false
     *
     */
    'align-content-space-around'?: boolean;

    /**
     * When applied, forces grid to wrap columns to the new line if no space is left.
     * @type boolean
     * @default true
     */
    'wrap'?: boolean;

    /**
     * When applied, sets `flex-wrap: nowrap` and all columns will be put in single line.
     * @type boolean
     * @default false
     */
    'no-wrap'?: boolean;

    /**
     * When applied, sets `flex-wrap: wrap-reverse` and gives you a grid that wraps in reverse.
     * @type boolean
     * @default false
     */
    'wrap-reverse'?: boolean;
}

interface GridProps<T> extends React.ClassAttributes<T> {
    /**
     * The className property is used to set the value of an element's class attribute
     * @type string
     */
    className?: string;
    hidden?: string;
}

declare enum Align {
    start, center, end
}
