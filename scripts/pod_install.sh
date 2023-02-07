#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  cd ios && pod install && cd ..
else
  echo 'No need to run postinstall stuff'
fi
