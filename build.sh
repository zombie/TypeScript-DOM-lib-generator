#!/bin/bash
if [ ! -d ".paket" ]; then
	mkdir ".paket"
	curl https://github.com/fsprojects/Paket/releases/download/2.12.5/paket.bootstrapper.exe -L --insecure -o .paket/paket.bootstrapper.exe
fi

mono .paket/paket.bootstrapper.exe
exit_code=$?
if [ $exit_code -ne 0 ]; then
	exit $exit_code
fi

mono .paket/paket.exe restore
exit_code=$?
if [ $exit_code -ne 0 ]; then
	exit $exit_code
fi

mono packages/FAKE/tools/FAKE.exe build.fsx 