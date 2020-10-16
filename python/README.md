# Python starter

This project starter defines a `Makefile` that allows to configure a python project with `pipenv`. The only requirement is to have [pipenv](https://pypi.org/project/pipenv/) installed in the system.

The virtual environment that will result from this project starter will include a `.venv` directory (that should be added to your `.gitignore`) and the `pipenv` standard configuration `Pipfile` and `Piplock.lock` which should be customised depending on the specific project requirements. The virtual environment will also include the project root directory as library root, which means that it will be possible to invoke python modules in the project directories as long as the virtual environment is active.

## Targets

The targets allowed from the makefile are:

- `install`: defines the virtual environment
- `requirements.txt`: produces the `requirements.txt` usable to 
- `reset`: removes the virtual environment and the `requirements.txt` file
