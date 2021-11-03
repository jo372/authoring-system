#!/bin/sh
CHROME_PATH=./node_modules/electron/dist/chrome-sandbox
PERMISSION_LEVEL=4755
OWNER=root
GROUP=$OWNER

if [ -f $CHROME_PATH ]; then 
    echo "changing $CHROME_PATH owner to $OWNER:$GROUP"
    sudo chown $OWNER:$GROUP $CHROME_PATH
    echo "changing file permissions for $CHROME_PATH to $PERMISSION_LEVEL"
    sudo chmod $PERMISSION_LEVEL $CHROME_PATH
fi
