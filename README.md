# json-tag
*Tagged template literal that escapes arguments as JSON values*

json-tag uses `JSON.stringify()` to escape the template literal's arguments.

#### Usage:

```javascript
import json from 'json-tag'

json`string:  ${ 'double quote "' }`
json`number:  ${ 1337 }`
json`boolean: ${ true } & ${ false }`
json`null:    ${ null }`
json`array:   ${ ['double quote "', null, 1337] }`
json`object:  ${ { doubleQuote: '"', doubleNumber: 1.337e+3 } }`
```

You will get the following strings:
```
string:  "double quote \""
number:  1337
boolean: true & false
null:    null
array:   ["double quote \"",null,1337]
object:  {"doubleQuote":"\"","doubleNumber":1337}
```

It works as follows, this:

```javascript
json`text ${value}`
```

Is essentialy this:

```javascript
`text ${JSON.stringify(value)}`
```

