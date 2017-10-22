# react-reflex-grid
React.js wrapper for [reflex-grid](http://leejordan.github.io/reflex/docs/) library. 

## Usage

### Simple usage

```jsx harmony
<Row>
    <Col size="6">COL A</Col>
    <Col size="6">COL B</Col>
</Row>
```
or
```jsx harmony
<Row>
    <Col size="md-3">COL X</Col>
    <Col size="md-3">COL Y</Col>
    <Col size="md-3">COL Z</Col>
    <Col size="md-3">COL R</Col>
</Row>
```

### Apply style classes
```jsx harmony
<Row className="bg">
    <Col size="6" className="fg">COL A</Col>
    <Col size="6" className="fg">COL B</Col>
</Row>
```

### Auto column size
```jsx harmony
<Row className="bg">
    <Col size="3">COL A</Col>
    <Col size "3">COL B</Col>
    <Col auto>Auto Col Size</Col>
</Row>
```

## Components

### Row
Container for columns. At the moment, no properties may be set.

### Col
Column element. The following properties may be set:
- `size` or `col` (**deprecated**) - the size of column. May be set as number, or number with prefix, when collapsible column is required. 
For example `6`, or `md-6` or `xs-9` is valid for `size` property.

- `auto` - set column size to auto. Example: `<Col auto>...</Col>`

For more information about valid prefixes, please, see the following article: [Breakpoints](http://leejordan.github.io/reflex/docs/#breakpoints)