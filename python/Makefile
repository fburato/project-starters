# Preamble 
SHELL := bash 
.ONESHELL: 
.SHELLFLAGS := -eu -o pipefail -c 
.DELETE_ON_ERROR: 
MAKEFLAGS += --warn-undefined-variables 
MAKEFLAGS += --no-builtin-rules 

ifeq ($(origin .RECIPEPREFIX), undefined)
  $(error This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later)
endif
.RECIPEPREFIX = >

# Project 
SHELL:=/bin/bash
ROOT_DIR:=$(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
PYTHON_LIB=$(shell find $(ROOT_DIR)/.venv/lib -name site-packages)
pipenv_exec:=$(shell which pipenv)
pipenv=PIPENV_VENV_IN_PROJECT=true $(pipenv_exec)

install: $(ROOT_DIR)/.venv
> @echo $(ROOT_DIR) > $(PYTHON_LIB)/home.pth
.PHONY: install

$(ROOT_DIR)/.venv:
> @echo "Creating virtual environment in $(ROOT_DIR)"
> @$(pipenv) --three

reset:
> @echo "Cleaning virtual environment"
> @rm -rf $(ROOT_DIR)/.venv $(ROOT_DIR)/requirements.txt
.PHONY: reset

requirements.txt:
> @$(pipenv) lock -r > $(ROOT_DIR)/requirements.txt
