# react-reflex-grid
React.js wrapper for [reflex-grid](http://leejordan.github.io/reflex/docs/) library. 

## Components

### Row
Container for columns. The following properties may be set:
- `bleed` - remove the internal padding on the entire grid.

### Col
Column element. The following properties may be set:
- `size` - the size of column. Should be set as a number: `<Col size={6}>...</Col>`.
- `col` (**deprecated**) - the size of column. Should be set as a string, like `<Col col="6">` or `Col col="md-6">`.
- `auto` - set column size to auto. Example: `<Col auto>...</Col>`.
- `xs`, `sm`, `md`, `lg`, `xlg` - set the breakpoint for column. Example: `<Col size={6} md>...</Col>`. For more information about breakpoints, please see http://reflexgrid.com/docs/#breakpoints
- `bleed` - remove the internal padding on the specific column. Example: `<Col bleed>....</Col>`.

For more information about valid prefixes, please, see the following article: [Breakpoints](http://leejordan.github.io/reflex/docs/#breakpoints)

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