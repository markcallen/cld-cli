-include .env

APP_NAME = cld-cli
WEB_SHA ?= $(shell git log -1 --format=%h)
RELEASE_VERSION ?= $(shell git describe --abbrev=0 --tags)-$(WEB_SHA)
