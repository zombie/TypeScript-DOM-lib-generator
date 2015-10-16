#!/bin/bash
# use mono
if [! -d ".paket"]; then
	mkdir .paket
	curl https://github.com/fsprojects/Paket/releases/download/2.12.5/paket.bootstrapper.exe -L --insecure -o .paket/paket.bootstrapper.exe
	mono .paket/paket.bootstrapper.exe prerelease
	exit_code=$?
	if [ $exit_code -ne 0 ]; then
		exit $exit_code
	fi
fi

if [ ! -f "paket.lock" ]; then
	mono .paket/paket.exe install
else
	mono .paket/paket.exe restore
fi
exit_code=$?
if [ $exit_code -ne 0 ]; then
	exit $exit_code
fi

mono packages/build/FAKE/tools/FAKE.exe $@ --fsiargs -d:MONO build.fsx
