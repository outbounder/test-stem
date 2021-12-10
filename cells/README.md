# cells folder

contains cells and their related implementation code.

Cells can be managed via [angelscripts-monorepo-cells](https://github.com/node-organic/angelscripts-monorepo-cells) and/or via [lernajs](https://github.com/lerna/lerna)

## create a cell

```
$ cd test-stem
$ npx angel create cell
? cell name: myCell
? cell group: 
? cell kind:
done.
$ cd cells/myCell
$ npm init
```

## use monorepo package within a cell

```
$ cd test-stem
$ npx lerna add myModule --scope=myCell
```