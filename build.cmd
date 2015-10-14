@echo off

call dependencies.cmd

@echo "Building..."
packages\FAKE\tools\FAKE.exe %* --fsiargs build.fsx

.\bin\Generator.exe