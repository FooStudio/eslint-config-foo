# eslint-config-foo

[Shared ESLint config](http://eslint.org/docs/developer-guide/shareable-configs) for [Foo(Studio)](https://github.com/foostudio) JavaScript code.

The majority of EsLint config should be defined here rather that each project's own `.eslintrc`. 

## Install

```bs
npm install --save-dev eslint-config-foo
```

## Usage

Then extend `foo` in your `.eslintrc`

```json
	{
		"extends":"foo"
	}
```

