# react-reflex-grid
React.js wrapper for [reflex-grid](http://leejordan.github.io/reflex/docs/) library. 

## Components

### Container
Reflex grid has a responsive `.container` class available which uses a combination of margins and padding to maintain layout between elements both inside and outside of the grid. 
For more information about it, please see [container article](http://reflexgrid.com/docs/#containers).

The following properties may be set:
- `full` - make the full-width containing element. Example: `<Container full>...</Container>`.
- `className` - additional CSS classes for component.


### Row
Container for columns. The following properties may be set:
- `bleed` - remove the internal padding on the entire grid.
- `className` - additional CSS classes for component.

### Col
Column element. The following properties may be set:
- `size` - the size of column. Should be set as a number: `<Col size={6}>...</Col>`.
- `col` (**deprecated**) - the size of column. Should be set as a string, like `<Col col="6">` or `Col col="md-6">`.
- `auto` - set column size to auto. Example: `<Col auto>...</Col>`.
- `xs`, `sm`, `md`, `lg`, `xlg` - set the breakpoint for column. Example: `<Col size={6} md>...</Col>`. 
For more information about breakpoints, please see [breakpoints](http://reflexgrid.com/docs/#breakpoints).
- `bleed` - remove the internal padding on the specific column. Example: `<Col bleed>....</Col>`.
- `className` - additional CSS classes for component.

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