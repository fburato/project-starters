SHELL := /bin/bash

PROJECT_NAME := flex_promos_client

.DEFAULT_GOAL := help
.POSIX=	.POSIX=
.SUFFIXES=

CDN_URL = https://cdn.com

NPM_IMAGE := node:16.3.0-alpine

VERSION = $(shell grep '"version"' package.json | sed 's/.*"\([[:digit:]]\.[[:digit:]]\.[[:digit:]]\)".*/\1/g')

NPM=docker run --rm \
		-p 8080:8080 \
		--workdir /app \
		-v $(PWD):/app $(NPM_IMAGE) \
		npm

# local targets
localinstall: ## install dependencies
	$(NPM) install

localrun: ## start webpack dev server on port 8080
	$(NPM) run start

localbuild: .require-CDN_URL ## builds the application for CDN_URL
	$(NPM) run build -- --env cdnUrl=$(CDN_URL)


.require-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Environment variable $* not set"; \
		exit 1; \
	fi

help:
	@ grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "%-30s %s\n", $$1, $$2}'

