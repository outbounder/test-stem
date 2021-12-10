# dna folder

Contains DNA information about the project

* `dna/cells` contains cells' index
* `secrets.yaml` default secrets
* modes `_development` and `_production`
  * both modes have gitignored secrets overriding default ones in DNA root.

## create dna mode

```
$ cd test-stem
$ mkdir dna/_myMode
$ edit dna/_myMode/secrets.yaml
```

## create and use common dna branch

```
$ cd test-stem/dna
$ echo "myProperty: 'Hello World'" > myBranch.yaml
```

within any dna:

```
cellBranch:
  cellProperty: "@myBranch.myProperty"
```

## add cell to dna cells index

```
$ cd test-stem/dna/cells
$ echo "  - cells/myCell" >> index.yaml
```