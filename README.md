# Visual Studio Services Web Extension SDK

This repository contains a modularized version of Visual Studio Services Web Extension SDK.

## Installation

```sh
npm i vss-sdk-module
```

## Usage

```js
import 'VSS' from 'vss-sdk-module';
VSS.ready(() => { /*...*/ });
```
or
```js
const VSS = require('vss-sdk-module');
VSS.ready(() => { /*...*/ });
```

## License
MIT
