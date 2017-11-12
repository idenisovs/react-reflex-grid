# react-reflex-grid
React.js wrapper for [reflex-grid](http://leejordan.github.io/reflex/docs/) library.

![Release](https://img.shields.io/npm/v/react-reflex-grid.svg) 

## Components

### Container
Reflex grid has a responsive `.container` class available which uses a combination of margins and padding to maintain layout between elements both inside and outside of the grid. 
For more information about it, please see [container article](http://reflexgrid.com/docs/#containers).

The following properties may be set:
- `full` - make the full-width containing element. Example: `<Container full>...</Container>`.
- `className` - additional CSS classes for component.
- `hidden` - allow to hide whole row at the specific breakpoints. Allowed breakpoints: XXS, XS, SM, MD, LG, XLG. Example: `<Container hidden="xs,sm">...</Container>"`.

### Row
Container for columns. The following properties may be set:
- `bleed` - remove the internal padding on the entire grid.
- `className` - additional CSS classes for component.
- `hidden` - allow to hide whole row at the specific breakpoints. Allowed breakpoints: XXS, XS, SM, MD, LG, XLG. Example: `<Row hidden="xs,sm">...</Col>"`.
- `align` - when this will be applied to `Row`, then columns will be collapsed to content and aligned to vertical position, as it is set by value of `align`.  It can be set in the following way: `<Row align=["start"|"center"|"end"]>...</Row>`
- `direction-row-reverse`, `direction-column`, `direction-column-reversed` - set the direction of columns.
- `justify-end`, `justify-center`, `justify-space-between`, `justify-space-around` - set the justification of columns.

### Col
Column element. The following properties may be set:
- `size` - the size of column. Should be set as a number: `<Col size={6}>...</Col>`.
- `col` (**deprecated**) - the size of column. Should be set as a string, like `<Col col="6">` or `Col col="md-6">`.
- `auto` - set column size to auto. Example: `<Col auto>...</Col>`.
- `xs`, `sm`, `md`, `lg`, `xlg` - set the breakpoint for column. Example: `<Col size={6} md>...</Col>`. 
For more information about breakpoints, please see [breakpoints](http://reflexgrid.com/docs/#breakpoints).
- `bleed` - remove the internal padding on the specific column. Example: `<Col bleed>....</Col>`. May take `"x"` or `"y"` value, which removes only vertical or horizontal paddings. Example: `<Col bleed="x">....</Col>`, `<Col bleed="y">....</Col>`.
- `className` - additional CSS classes for component.
- `hidden` - allow to hide column at the specific breakpoints. Allowed breakpoints: XXS, XS, SM, MD, LG, XLG. Example: `<Col hidden="xs,sm">...</Col>"`.
- `order` - Set the order, in which specified column will be shown in grid. Takes number as value: `<Col order={1}>...</Col>`

## Usage

### Simple usage
```jsx harmony
<Row>
    <Col size={6}>COL A</Col>
    <Col size={6}>COL B</Col>
</Row>
```
or
```jsx harmony
<Row>
    <Col size={3}>COL X</Col>
    <Col size={3}>COL Y</Col>
    <Col size={3}>COL Z</Col>
    <Col size={3}>COL R</Col>
</Row>
```

### Apply style classes
```jsx harmony
<Row className="bg">
    <Col size={6} className="fg">COL A</Col>
    <Col size={6} className="fg">COL B</Col>
</Row>
```

### Auto column size
```jsx harmony
<Row>
    <Col size={3}>COL A</Col>
    <Col size {3}>COL B</Col>
    <Col auto>Auto Col Size</Col>
</Row>
```

### Breakpoints
```jsx harmony
<Row>
    <Col size={3} md>COL A</Col>
    <Col size={3} md>COL B</Col>
    <Col auto>Auto Col Size</Col>
</Row>
```

### Bleed
#### Grid
```jsx harmony
<Row bleed>
    <Col size={6}>COL A</Col>
    <Col size={6}>COL B</Col>
</Row>
```

#### Column
```jsx harmony
<Row>
    <Col size={6} bleed>COL A</Col>
    <Col size={6}>COL B</Col>
</Row>
```
##### Vertical (Y) and horizontal (X) paddings removal
```jsx harmony
<Row>
    <Col size={6} bleed="x">COL A</Col>
    <Col size={6} bleed="y">COL B</Col>
</Row>
```

### Container
#### Simple
```jsx harmony
<Container>
    <Row>
        <Col size={12}>Col Size 12</Col>
    </Row>
</Container>
```

#### Container full
```jsx harmony
<Container full>
    <Row>
        <Col size={12}>Col Size 12</Col>
    </Row>
</Container>
```

### Hidden

#### Col
```jsx harmony
<Row>
    <Col auto>
        <h3>Auto Column</h3>
    </Col>
    <Col size={6} hidden='xxs,xs,sm'>
        <h3>Col Size 6, hidden at XS, SM, visible at XXS, MD, LG, XLG.</h3>
    </Col>
</Row>
```

#### Row
```jsx harmony
<Row hidden='xxs,xs,sm'>
    <Col size={6}>
        <h3>Col Size 6.</h3>
    </Col>
    <Col size={6}>
        <h3>Col Size 6.</h3>
    </Col>
</Row>
```

#### Container
```jsx harmony
<Container hidden='xxs,xs,sm'>
    <Row>
        <Col size={6}>
            <h3>Col Size 6.</h3>
        </Col>
        <Col size={6}>
            <h3>Col Size 6.</h3>
        </Col>
    </Row>
</Container>
```

### Cross-Axis Align
```jsx harmony
<Row align="start">
    <Col size={4}>
        <h3>Col Size 4.</h3>
    </Col>
    <Col size={4}>
        <h3>Col Size 4.</h3>
    </Col>
    <Col size={4}>
        <h3>Col Size 4.</h3>
    </Col>
</Row>
```

### Ordering
```jsx harmony
<Row>
    <Col size={3} order={2}>
        <h3>B</h3>
    </Col>
    <Col size={3} order={1}>
        <h3>A</h3>
    </Col>
    <Col size={3} order={4}>
        <h3>D</h3>
    </Col>
    <Col size={3} order={3}>
        <h3>C</h3>
    </Col>
</Row>
```

### Direction
```jsx harmony
<Row direction-column-reversed>
    <Col size={3}>
        <h3>A</h3>
    </Col>
    <Col size={3}>
        <h3>B</h3>
    </Col>
    <Col size={3}>
        <h3>C</h3>
    </Col>
    <Col size={3}>
        <h3>D</h3>
    </Col>
</Row>
```

### Justification
Take a look on **size** attribute!

```jsx harmony
<Row justify-space-between>
    <Col size={3}>
        First appear years night there the in them rule.
    </Col>
    <Col size={3}>
        Be can't winged good for also saying first. Shall, fourth Greater cattle.
    </Col>
    <Col size={3}>
        First appear years night there the in them rule.
    </Col>
</Row>
```