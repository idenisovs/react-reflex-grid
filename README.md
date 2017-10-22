# react-reflex-grid
React.js wrapper for [reflex-grid](http://leejordan.github.io/reflex/docs/) library. 

## Usage

### Simple usage

```jsx harmony
<Row>
    <Col col="6">COL A</Col>
    <Col col="6">COL B</Col>
</Row>
```
or
```jsx harmony
<Row>
    <Col col="md-3">COL X</Col>
    <Col col="md-3">COL Y</Col>
    <Col col="md-3">COL Z</Col>
    <Col col="md-3">COL R</Col>
</Row>
```

### Apply style classes
```jsx harmony
<Row className="bg">
    <Col col="6" className="fg">COL A</Col>
    <Col col="6" className="fg">COL B</Col>
</Row>
```

## Components

### Row
Container for columns. At the moment, no properties may be set.

### Col
Column element. The following properties may be set:
- `col` (required) - the size of column. May be set as number, or number with prefix, when collapsible column is required. 
For example `6`, or `md-6` or `xs-9` is valid for `col` property.

For more information about valid prefixes, please, see the following article: [Breakpoints](http://leejordan.github.io/reflex/docs/#breakpoints)