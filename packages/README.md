# packages folder

Contains common packages and their related implementation code.

Packages can be managed via [angelscripts-monorepo-packages](https://github.com/node-organic/angelscripts-monorepo-packages) and/or via [lernajs](https://github.com/lerna/lerna)

## create a package

```
$ cd test-stem
$ npx angel create package
? packageName: myPackage
done.
```

## use another monorepo package

```
$ cd test-stem
$ npx lerna add myUtilityPackage --scope=myPackage
```