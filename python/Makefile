SHELL:=/bin/bash
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
PYTHON_LIB=$(shell find $(ROOT_DIR)/.venv/lib -name site-packages)
pipenv_exec:=$(shell which pipenv)
pipenv=PIPENV_VENV_IN_PROJECT=true $(pipenv_exec)

$(ROOT_DIR)/.venv:
	@echo "Creating virtual environment in $(ROOT_DIR)"
	@$(pipenv) --three

install: $(ROOT_DIR)/.venv
	@echo $(ROOT_DIR) > $(PYTHON_LIB)/home.pth

reset:
	@echo "Cleaning virtual environment"
	@rm -rf $(ROOT_DIR)/.venv $(ROOT_DIR)/requirements.txt

requirements.txt:
	@$(pipenv) lock -r > $(ROOT_DIR)/requirements.txt
