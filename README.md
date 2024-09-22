### Hexlet tests and linter status:
[![Actions Status](https://github.com/ZoOmmyQ/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ZoOmmyQ/frontend-project-46/actions)



# Difference Calculator
### Description:
A tool to compare two files and show the difference.
JSON and YAML(YML) formats are supported.


---
#### Installation:

```
$ git clone https://github.com/ZoOmmyQ/frontend-project-46
$ cd frontend-project-46
$ make install
```
---
### How to use:
Enter ```gendiff -h``` to view a small help for usage

[![asciicast](https://asciinema.org/a/RgpXfyEoyj4KF1VJBeRtwhsJa.svg)](https://asciinema.org/a/RgpXfyEoyj4KF1VJBeRtwhsJa)

To run the program, you must specify the ```gendiff``` command and then absolute (or relative) paths to the comparison files.

To specify data output type, you must add this type name with the flag -f: (```-f plain```, ```-f json```, ```-f stylish```(default))


```
#### Presents
You can use ```gendiff``` to find the difference both for flat and nested YAML/JSON files.

[![asciicast](https://asciinema.org/a/Ob5FXsBfvGqbMi2SzIFtSFk4C.svg)](https://asciinema.org/a/Ob5FXsBfvGqbMi2SzIFtSFk4C)
