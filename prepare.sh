#!/usr/bin/env bash

set -euo pipefail

optimizedFor="${WALLET_OPTIMIZED_FOR:-develop}"

cat wails."${optimizedFor}".json > wails.json
cat build/appicon."${optimizedFor}".png > build/appicon.png
