SHELL := /bin/bash

PROJECT_NAME := flex_promos_client

.DEFAULT_GOAL := help
.POSIX=	.POSIX=
.SUFFIXES=

CDN_URL = https://cdn.com

NPM_IMAGE := node:18.8.0-alpine

VERSION = $(shell grep '"version"' package.json | sed 's/.*"\([[:digit:]]\.[[:digit:]]\.[[:digit:]]\)".*/\1/g')

BUILD_DOCKER=docker run --rm \
		-p 8080:8080 \
		--workdir /app \
		-v $(PWD):/app $(NPM_IMAGE) \
		yarn

BUILD=yarn

# local targets
localinstall: ## install dependencies
	$(BUILD) install

localrun: ## start webpack dev server on port 8080
	$(BUILD) run start

localbuild: .require-CDN_URL ## builds the application for CDN_URL
	$(BUILD) run build -- --env cdnUrl=$(CDN_URL)


.require-%:
	@ if [ "${${*}}" = "" ]; then \
		echo "Environment variable $* not set"; \
		exit 1; \
	fi

help:
	@ grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "%-30s %s\n", $$1, $$2}'

