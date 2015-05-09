.PHONY: start-redis add-job

BIN=node --harmony

start:
	@./node_modules/.bin/nf start

app:
	@$(BIN) app

add:
	@$(BIN) lib/addJob

add-exception:
	@$(BIN) lib/addJob -1

worker:
	@$(BIN) lib/worker

redis:
	@redis-server
